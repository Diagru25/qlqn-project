import { Spin, Tree } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useActions from "../../../../redux/useActions";

const updateTreeData = (list, key, children) => {
  const a = list.map((node) => {
    if (node.key === key) {
      return {
        ...node,
        children
      }
    }
    return node;
  });
  return a;
}

const UnitTree = () => {
  const [treeData, setTreeData] = useState([]);
  
  const dispatch = useDispatch();
  const { memberActions } = useActions();
  
  useEffect(() => {
    dispatch(memberActions.actions.getMemberUnit());
  }, [dispatch, memberActions]);

  const memberAffiliatedUnit = useSelector((state) => state.memberListReducer.memberAffiliatedUnit);
  const memberUnit = useSelector((state) => state.memberListReducer.memberUnit);
  
  useEffect(() => {
    if(memberUnit.items) {
      const unitState = memberUnit.items.length > 0 ? memberUnit.items.map((item) => ({key: item.Id, title: item.Ten})) : [];
      setTreeData(unitState);
    }
  }, [memberUnit.items]);

  const onLoadData = async ({ key }) => {
    try {
      if (memberAffiliatedUnit.items) {
        let tempArr = [];
        for (let i = 0; i < memberAffiliatedUnit.items.length; i++) {
          
          const filterAffiliatedArr = memberAffiliatedUnit.items[i].filter((item) => item.ParentId === key);
          const convertedFilter = filterAffiliatedArr.map((item) => ({key: item.Id, title: item.Ten}));

          if(convertedFilter.length > 0)
            tempArr = [...convertedFilter];
        }
        const updatedArr = updateTreeData(treeData, key, tempArr);
        setTreeData([...updatedArr]);
      }
    } catch (error) {
      // console.log(error)
    }
  }

  return (
    <>{memberUnit.isLoading ? <Spin /> : <Tree loadData={onLoadData} treeData={treeData} />}</>
  );
};

export default UnitTree;
