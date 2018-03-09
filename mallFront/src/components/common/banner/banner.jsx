import React from 'react';
import { connect } from 'dva';

import {Icon} from 'antd';
import styles from './banner.less';

class Banner extends React.Component{
    constructor(props){
        super(props)
    }

    previous=()=>{
        let {bannerKey,bannerList} = this.props.pageContent;
        let prevKey = bannerKey - 1 ;
        if(prevKey < 0){
           prevKey = bannerList.length - 1;
        }
        this.props.dispatch({
            type:"pageContent/previous",
            payload:{
                bannerKey: prevKey,
            }
        })
    }

    next=()=>{
        let {bannerKey,bannerList} = this.props.pageContent;
        let nextKey = bannerKey + 1 ;
        if(nextKey > bannerList.length - 1){
           nextKey = 0;
        }
        this.props.dispatch({
            type:"pageContent/next",
            payload:{
                bannerKey: nextKey,
            }
        })
    }

	render(){
        const {bannerList, bannerKey,} = this.props.pageContent;
        let len = bannerList && bannerList.length || 0;
		return(
            <div className={styles.banner_content}>
                <div className={styles.left_arrow}><Icon className={styles.step} type="step-backward" onClick={this.previous}/></div>
                <div className={styles.right_arrow}><Icon className={styles.step} type="step-forward" onClick={this.next}/></div>
                {
                     bannerList && bannerList.length >0 && bannerList.map((item,index)=>{
                         let url = item && item.imgurl;
                        return <div className={ bannerKey == index ? styles.show : styles.hide} key={`banner_`+index} style={{"background":`url(${url}) center center / cover no-repeat`,height:'100%'}}>

                        </div>
                    })
                }
            </div>
		)
	}
}

function mapStatetoPops({pageContent}){
    return {pageContent}
}

export default connect(mapStatetoPops)(Banner);
