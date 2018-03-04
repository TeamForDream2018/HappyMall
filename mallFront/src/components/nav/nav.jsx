import React from "react";
import { Icon,Popover } from 'antd';
import {Link} from 'react-router';

import * as styles from './nav.less';

export default class Nav extends React.Component{
    render(){
          let abost_us_cont = <div>
                                <pre>
                                    本项目主要使用的前端框架有
                                    aaa
                                    bbb
                                </pre>
                          </div>
        return(
            <ul className={styles.main_nva}>
                <li><Popover title="关于我们" content={abost_us_cont}><Icon className={styles.li_icon} type="question-circle"/>关于我们</Popover ></li>
                <li><Link><Icon className={styles.li_icon} type="heart"/>我的HappyMall</Link></li>
                <li><Link><Icon className={styles.li_icon} type="profile"/>我的订单</Link></li>
            </ul>
        )
    }
}
