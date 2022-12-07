import { Tree } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useActions from "../../../../redux/useActions";
import Loading from "../../../Loading";

const UnitTree = () => {
  const dispatch = useDispatch();
  const { memberActions } = useActions();

  const memberUnit = useSelector((state) => state.memberListReducer.memberUnit);

  const isLoading = memberUnit.isLoading;

  const treeUnitData = memberUnit.data;

  useEffect(() => {
    dispatch(memberActions.actions.getMemberUnit());
  }, [dispatch, memberActions]);

  return <>{isLoading ? <Loading /> : <Tree treeData={treeUnitData} />}</>;
};

export default UnitTree;
