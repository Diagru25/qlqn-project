import React from "react";
import { Outlet } from "react-router-dom";

export const ClientRoute = () => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}