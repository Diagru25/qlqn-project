import React from "react";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
    return (
        <div>
            <div>Header</div>
            <div>sidebar</div>
            <Outlet/>
            <div>Footer</div>
        </div>
    )
}