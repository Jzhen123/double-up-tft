import React, { useState } from "react";
import { Panel } from 'primereact/panel';


import AuthForm from "./authForm";

import { login } from "../api";

export const Login = () => {
    const [loginOrRegister, setLoginOrRegister] = useState('login');

    return (
        <div className="p-grid nested-grid p-dir-col p-align-center">
            <Panel header={loginOrRegister === 'login' ? 'Login' : 'Register'} style={{ marginTop: 100 }}>
                <div style={{ padding: 10 }}>
                    <div className="p-col p-text-bold">
                        Welcome to DoubleUpTFT
                    </div>
                    <AuthForm typeOfForm={loginOrRegister} onSubmitForm={(data) => login(data)} />
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
