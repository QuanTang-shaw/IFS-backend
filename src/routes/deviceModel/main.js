import { connect } from 'dva';
import Model from'./model';
import Category from'./categoryNav';
import styles from './main.css'
const x = 3;
const y = 2;
const z = 1;
const gData = [];
const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);
const devModel=({dispatch,devCategory})=>{

    const {expandedKeys,selectedRowKeys,loading}=devCategory
    const modelProp={
        selectedRowKeys,
        loading,
    }
    const categoryProp={
        expandedKeys,
        gData,
    }
    return(
        <div className={styles.wrap}>
            <div className={styles.nav}>
                {/* <Category {...categoryProp}/> */}
            </div>
            <div className={styles.model}>
                <Model {...modelProp} />
            </div>
        </div>
    )
}
function mapStateToProps(state, ownProps) {
    return {
      devCategory: state.devcategory
    };
  }
export default connect(mapStateToProps)(devModel);
// export default devModel;