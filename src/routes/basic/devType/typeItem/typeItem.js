import { Icon } from 'antd';

import styles from './typeItem.css';

const typeItemWrap=({name})=>{

    return(
        <div className={styles.wrapItem}>
            <span>{name}</span>
            <Icon type="right" className={styles.icon} />
        </div>
    )
}
export default typeItemWrap;