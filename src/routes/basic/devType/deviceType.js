import { Row, Col ,Table, Button ,Popconfirm,message,Modal,Form, Input, DatePicker} from 'antd';
import { connect } from 'dva';

import styles from './deviceType.css';
import TypeItemWrap from './typeItem/typeItem';

const DeviceType=(props)=>{
   console.log('devtypeProp',props);
   const {basicData,dispatch}=props;
   const {devParType,devSubType}=basicData;
   let typeItem=devParType.map((ele,num)=>{
        return (<li key={num.toString()}>   
                    <TypeItemWrap name={ele.name}/>
                </li>);
    });
    const columns = [
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
          width:200
        }, 
        {
          title: '英文名称',
          dataIndex: 'address',
          key: 'address',
          width:200
        },
        {
          title: '操作',
          key: 'action',
          /* render:(text, record, index)=>(
            <div style={{display:'flex','justifyContent': 'space-around'}}>
              <Button icon="edit" onClick={showModal.bind(this,record)}>编辑</Button>
              <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                <Button type="danger" icon="delete">删除</Button>
              </Popconfirm>
            </div>
          ) */
        }
    ];
        return(
            <div className={styles.wrap}>
                <p style={{borderBottom:'solid 2px #b7b5b3',marginBottom:'30px',fontSize:'25px'}}>设备类别</p>
                <div className={styles.content}>
                    <Row>
                        <Col span={3}>
                            <div className={styles.nav}>
                                <div className={styles.navHead}>
                                    左侧导航
                                </div>
                                <div>
                                    <ul>
                                        {typeItem}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col span={16}>
                            <div>
                                <Table columns={columns} dataSource={devSubType} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
function mapStateToProps(state, ownProps) {
    // console.log('devtype-state',state)
    // console.log('devtype-ownprop',ownProps)
    return {
        basicData: state.basicData
    }
}
export default connect(mapStateToProps)(DeviceType);    