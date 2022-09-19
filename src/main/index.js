import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import { AdminLayout } from "./admin";
import authRoute from "../constants/auth_route.constant";
import publicRoute from "../constants/public_route.constant";

export const App = () => {
    return (
        <ErrorBoundary>
            <Routes>
                {
                    publicRoute.map(({ path, element }) => {
                        const Element = element;
                        return (
                            <Route
                                key={path}
                                path={path}
                                element={
                                    <Suspense fallback={null}>
                                        <Element />
                                    </Suspense>
                                }
                            />
                        )
                    })
                }
                <Route element={<AdminLayout />}>
                    {
                        authRoute.map(({ path, element }) => {
                            const Element = element;
                            return (
                                <Route
                                    key={path}
                                    path={path}
                                    element={
                                        <Suspense fallback={null}>
                                            <Element />
                                        </Suspense>
                                    }
                                />
                            )
                        })
                    }
                </Route>
                <Route
                    path="*"
                    element={
                        <div>
                            404 NOT FOUND
                        </div>
                    }
                />
            </Routes>
        </ErrorBoundary>
    )
}