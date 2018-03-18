import React from 'react';
import styles from './breadcrumb.less';

import {Link} from 'react-router';
import { Breadcrumb  } from 'antd';

class Bread extends React.Component{
	render(){
		const {routes} = this.props;
		let breadCrumbCont = [];
	    routes && routes.length > 0 && routes.map(function(item, index) {
	        let {path,breadcrumbName} = item;
	        if(breadcrumbName && breadcrumbName.length > 0) {
                if(index == 0){
                   breadCrumbCont.push(
                        <li key={'bread_crumb_' + index}>
                              <Link to="/" activeStyle={{color:"red"}}><span className={styles.breadcrumbname}>{breadcrumbName}</span></Link>
                            { ( routes.length - 1 ) != index && <span className={styles.arrow}>&gt;</span> }
                        </li>
                   )
                }else{
                    breadCrumbCont.push(
                        <li key={'bread_crumb_' + index}>
                                <span className={styles.breadcrumbname}>{breadcrumbName}</span>
                            { ( routes.length - 1 ) != index && <span className={styles.arrow}>&gt;</span> }
                        </li>
	               );
                }

	        }
	    });
	    if(breadCrumbCont.length>0){
	        breadCrumbCont.unshift(
		        <li className={styles.liHeader} key="bread_crumb_Header"/>
	        );
	    };
		return(
			<div>
				<ul className={styles.breadCont} >
	              {breadCrumbCont}
	            </ul>
			</div>
		)
	}
}

export default Bread;
