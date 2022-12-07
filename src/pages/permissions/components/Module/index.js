import { Col, Typography } from "antd";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useActions from "../../../../redux/useActions";

import styles from "./style.module.css";

const Module = () => {
    const dispatch = useDispatch();
    const { permissionActions } = useActions();

    const moduleList = useSelector(state => state.permissionReducer.moduleList);
    const currentModule = useSelector(state => state.permissionReducer.currentModule);

    useEffect(() => {
        dispatch(permissionActions.actions.getModuleList());
    }, [dispatch, permissionActions])

    const handleSelectModule = useCallback((item) => {
        dispatch(permissionActions.actions.updateState({
            currentModule: item
        }));
    }, [dispatch, permissionActions]);

    const isActivated = useCallback((firstId, secondId) => {
        return firstId === secondId ? true : false;
    }, []);

    return (
        <Col className={styles["module_list"]} flex="450px">
            <Typography.Title level={4}>Module</Typography.Title>
            {
                moduleList.items.map((item, index) => <div
                    key={index}
                    className={` ${styles["list_item"]} ${isActivated(item.Id, currentModule.Id) && styles["list_item_active"]}`}
                    onClick={() => handleSelectModule(item)}
                >
                    {item.name}</div>)
            }
        </Col>
    );
};

export default Module;
