import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { reducers } from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        ...reducers
    },
    devTools: true,
    middleware: (defaultMiddleWare) => defaultMiddleWare().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export { store }

