import React from "react";

import AuthForm from "./authForm";

import { login } from "../api";

export const Login = () => {
    return (
        <AuthForm typeOfForm="login" onSubmitForm={(data) => login(data)}/>
    );
};
