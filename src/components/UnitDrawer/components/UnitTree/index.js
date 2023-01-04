import { Spin, Tree } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useActions from "../../../../redux/useActions";

const UnitTree = () => {
  const dispatch = useDispatch();
  const { memberActions } = useActions();

  const memberUnit = useSelector((state) => state.memberListReducer.memberUnit);

  const isLoading = memberUnit.isLoading;

  const treeUnitData = memberUnit.data;

  useEffect(() => {
    dispatch(memberActions.actions.getMemberUnit());
  }, [dispatch, memberActions]);

  return <>{isLoading ? <Spin /> : <Tree treeData={treeUnitData} />}</>;
};

export default UnitTree;
