import { Link } from 'dva/router';
import { Button, Radio, Icon } from 'antd';


export default function factoryMG({children}) {

    return(
        <div>
            <Radio.Group>
                <Radio.Button value="large">
                    <Link to="/factoryList">
                        工厂列表
                    </Link>
                </Radio.Button>
                <Radio.Button value="default">
                    <Link to="/factoryMap">
                        工厂地图
                    </Link>
                </Radio.Button>
            </Radio.Group>
            {children}
        </div>
    );
};