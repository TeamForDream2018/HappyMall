import React from "react";
import { Icon,Popover } from 'antd';
import {Link} from 'react-router';

import * as styles from './nav.less';

export default class Nav extends React.Component{
    constructor(props){
        super(props)
    }

    transformPage=(e)=>{
        console.log(e)
    }

    render(){
          let abost_us_cont = <div>
                                <p>
                                    前端
                                </p>
                                <p>
                                    后端
                                </p>
                          </div>
        return(
            <ul className={styles.main_nva}>
                <li><Link  ref="mm" className={styles.li_icon_acive}><Popover title="主要技术" content={abost_us_cont}><span><Icon className={styles.li_icon} type="question-circle"/>关于我们</span></Popover ></Link></li>
                <li><Link  ref="mhm" className={styles.li_icon_acive}><span><Icon className={styles.li_icon} type="heart"/>我的HappyMall</span></Link></li>
                <li><Link ref="mm" className={styles.li_icon_acive}><span ><Icon className={styles.li_icon} type="profile"/>我的订单</span></Link></li>
            </ul>
        )
    }
}
