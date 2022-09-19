import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginRoute from '../../pages/login/route';

export const ClientRoute = () => {
    return (
        <Routes>
            <Route path={LoginRoute.path} element={LoginRoute.element} />
        </Routes>
    )
}