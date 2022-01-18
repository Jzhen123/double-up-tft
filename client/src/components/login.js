import React, { useState } from "react";
import { Panel } from 'primereact/panel';

import AuthForm from "./AuthForm";

import { login } from "../api/auth";

export default ({ onLoginSuccessful }) => {
    const [loginOrRegister, setLoginOrRegister] = useState('login');

    const submitForm = async (data) => {
        if (loginOrRegister === 'login') {
            let response = await login(data);
            if (response?.token) {
                localStorage.setItem('token', response.token);
                onLoginSuccessful();
            }
        } // else, use register new user api call when it's made
    }

    return (
        <div className="p-grid nested-grid p-dir-col p-align-center">
            <Panel header={loginOrRegister === 'login' ? 'Login' : 'Register'} style={{ marginTop: 100 }}>
                <div style={{ padding: 10 }}>
                    <div className="p-col p-text-bold" style={{ marginTop: 10, marginBottom: 10 }}>
                        Welcome to DoubleUpTFT
                    </div>
                    <AuthForm typeOfForm={loginOrRegister} onSubmitForm={(data) => submitForm(data)} />
                    <div className="p-col">
                        {loginOrRegister === 'login' ? 'Don\'t have an account? ' : 'Already have an account? '}
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                setLoginOrRegister(loginOrRegister === 'login' ? 'register' : 'login');
                            }}>
                            {loginOrRegister === 'login' ? 'Sign up' : 'Sign in'}
                        </a>
                    </div>
                </div>
            </Panel>
        </div>
    );
};
