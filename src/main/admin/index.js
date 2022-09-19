import React from "react";
import { Outlet, Route } from "react-router-dom";
import { Dashboard } from "../../pages/dashboard";
import DashboardRoute from '../../pages/dashboard/route';

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