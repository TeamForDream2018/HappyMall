import React from 'react';
import { connect } from 'dva';

import {Icon} from 'antd';
import styles from './banner.less';

class Banner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timer:null,
        }
    }

    setBannerKey=(key)=>{
        console.log(key)
         this.props.dispatch({
            type:"pageContent/updateState",
            payload:{
                bannerKey: key,
            }
        })
    }
    previous=()=>{
        let {bannerKey,show_current_banner,bannerList} = this.props.pageContent;
        let prevKey = bannerKey - 1 ;
        let listMenu = show_current_banner && show_current_banner.length>0 && show_current_banner  || bannerList;
        console.log()
        if(prevKey < 0){
           prevKey = listMenu.length - 1;
        }
        this.setBannerKey(prevKey);
    }

    next=()=>{
        let {bannerKey,show_current_banner,bannerList} = this.props.pageContent;
        let nextKey = bannerKey + 1 ;
        let listMenu = show_current_banner && show_current_banner.length>0 && show_current_banner || bannerList;
        if(nextKey > listMenu.length - 1){
           nextKey = 0;
        }
        this.setBannerKey(nextKey);
    }

    changeKey=(e)=>{
        console.log(e.target.id)
        this.setBannerKey(e.target.id);
    }

    lunbo=()=>{
        let {timer} =this.state;
        clearInterval(timer);
        timer = setInterval(this.next,5000);
        this.setState({
            timer,
        })
    }

    cancelTimer=()=>{
        let {timer} =this.state;
        clearInterval(timer);
    }

    componentDidMount(){
        this.lunbo();
    }

	render(){

        const {bannerList, bannerKey,show_current_banner} = this.props.pageContent;
        let menu_List = show_current_banner && show_current_banner.length>0 && show_current_banner || bannerList;
        let len = menu_List && menu_List.length || 0;
		return(
            <div className={styles.banner_content}>
                <div className={styles.left_arrow}><Icon onMouseEnter={this.cancelTimer} onMouseOut={this.lunbo} className={styles.step} type="step-backward" onClick={this.previous}/></div>
                <div className={styles.right_arrow}><Icon onMouseEnter={this.cancelTimer} onMouseOut={this.lunbo} className={styles.step} type="step-forward" onClick={this.next}/></div>
                {
                     menu_List && menu_List.length >0 && menu_List.map((item,index)=>{
                         let url = item && item.imgurl;
                        return <div onMouseEnter={this.cancelTimer} onMouseOut={this.lunbo} className={ bannerKey == index ? styles.show : styles.hide } key={`banner_`+index} style={{"background":`url(${url}) center center / cover no-repeat`,height:'100%'}}>
                        </div>
                    })
                }
                <div className={styles.pre_show}>
                    {
                         menu_List && menu_List.length >0 && menu_List.map((item,index)=>{
                             let url = item && item.imgurl;
                             return <div className={bannerKey == index ? styles.listitem_active : styles.listitem_static} key={"display_"+index}  style={{height:`100%`,width:`10%`,position:"relative"}}>
                                 <div style={{"background":`url(${url}) center center / cover no-repeat`,height:`100%`,width:`100%`}}></div>
                                 <div onMouseEnter={this.cancelTimer} onMouseOut={this.lunbo}  className={bannerKey == index ? styles.listitem_mask_active : styles.listitem_mask_static} onClick={this.changeKey} id={index}></div>
                            </div>
                        })
                    }
                </div>
            </div>
		)
	}
}

function mapStatetoPops({pageContent}){
    return {pageContent}
}

export default connect(mapStatetoPops)(Banner);
