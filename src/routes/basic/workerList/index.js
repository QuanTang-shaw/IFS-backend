import { connect } from 'dva';
import { Breadcrumb } from 'antd';
import TableList from './tablelist';
import WorkerInfo from './workerInfo';
import HeadTitle from 'components/headTitle';

const workerList=(props)=>{
    const {dispatch,basicData}=props
    const {workerInfoVisible}=basicData
    let workerContent = null;
    const toggleInfo = ()=>{
        // alert('info');
        dispatch({
            type:'basicData/toggleInfo',
        })
    }

    if (!workerInfoVisible) {
      workerContent = <TableList {...basicData} />;
    }else {
        workerContent =(
            <div>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item href="#/basicData/workerList" onClick={toggleInfo}>员工列表</Breadcrumb.Item>
                    <Breadcrumb.Item >员工详情</Breadcrumb.Item>
                </Breadcrumb>
                <WorkerInfo {...basicData} />
            </div>
        );
    }

    return(
        <div>
            <HeadTitle titleTxt={'员工列表'} />
            {workerContent}
        </div>
    )
}
function mapStateToProps(state, ownProps) {
    return {
        basicData:state.basicData,
    };
  }
export default connect(mapStateToProps)(workerList);