import { Spin, Tree } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useActions from "../../../../redux/useActions";

const UnitTree = () => {
  const dispatch = useDispatch();
  const { memberActions } = useActions();

  const memberUnit = useSelector((state) => state.memberListReducer.memberUnit);
  const memberAffiliatedUnit = useSelector((state) => state.memberListReducer.memberAffiliatedUnit);

  console.log("member unit", memberUnit);
  console.log("member affiliated", memberAffiliatedUnit);
  
  // const isLoadingParent = memberUnit.isLoading;
  // const isLoadingChild = memberAffiliatedUnit.isLoading;

  const treeUnitData = [
    
  ]

  useEffect(() => {
    dispatch(memberActions.actions.getMemberUnit());
  }, [dispatch, memberActions]);

  return <>{memberUnit.isLoading && memberAffiliatedUnit.isLoading ? <Spin /> : <Tree treeData={treeUnitData} />}</>;
};

export default UnitTree;
