import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;



const Category =({expandedKeys,gData})=>{
    const onDragEnter = (info) => {
        console.log(info);
        // expandedKeys 需要受控时设置
        /* this.setState({
          expandedKeys: info.expandedKeys,
        }); */
    }
    const onDrop = (info) => {
        console.log(info);
        const dropKey = info.node.props.eventKey;
        const dragKey = info.dragNode.props.eventKey;
        // const dragNodesKeys = info.dragNodesKeys;
        const loop = (data, key, callback) => {
          data.forEach((item, index, arr) => {
            if (item.key === key) {
              return callback(item, index, arr);
            }
            if (item.children) {
              return loop(item.children, key, callback);
            }
          });
        };
        // const data = [...this.state.gData];
        const data = gData;
        let dragObj;
        loop(data, dragKey, (item, index, arr) => {
          arr.splice(index, 1);
          dragObj = item;
        });
        if (info.dropToGap) {
          let ar;
          let i;
          loop(data, dropKey, (item, index, arr) => {
            ar = arr;
            i = index;
          });
          ar.splice(i, 0, dragObj);
        } else {
          loop(data, dropKey, (item) => {
            item.children = item.children || [];
            // where to insert 示例添加到尾部，可以是随意位置
            item.children.push(dragObj);
          });
        }
        this.setState({
          gData: data,
        });
    }
    //   render() {
    const loop = data => data.map((item) => {
      if (item.children && item.children.length) {
        return <TreeNode key={item.key} title={item.key}>{loop(item.children)}</TreeNode>;
      }
      return <TreeNode key={item.key} title={item.key} />;
    });
    return (
      <Tree
        className="draggable-tree"
        defaultExpandedKeys={expandedKeys}
        draggable
        onDragEnter={onDragEnter}
        onDrop={onDrop}
      >
        {loop(gData)}
      </Tree>
    );
    //   }

}
// function mapStateToProps(state, ownProps) {
//     // console.log(state)
//     // console.log(ownProps)
//     return {
//       devCategory: state.devcategory
//     };
//   }
// export default connect(mapStateToProps)(devCategory);
export default Category;