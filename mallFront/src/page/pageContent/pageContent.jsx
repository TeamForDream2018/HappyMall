import React from 'react';
import { connect } from 'dva';

import TitleDisplay from '../../components/common/titleDisplay/titleDisplay';
import Banner from '../../components/common/banner/banner';
import * as styles from './pageContent.less';

class PageCont extends React.Component{
    constructor(props){
        super(props)
        this.state={
            menuList:[],
        }
    }

    activeTitleKey =(key)=> {
        this.props.dispatch({
            type:"pageContent/updateState",
            payload:{
                title_active_id:key,
            }
        })
    }

    render(){
        let {menuList,title_active_id,bannerList,bannerKey} = this.props.pageContent
        let {dispatch} = this.props;
        let bannerProps = {
            bannerList,bannerKey,dispatch,
        }
        return(
            <div className={styles.pageCont}>
                <TitleDisplay menuList={menuList} title_active_id={title_active_id} activeTitleKey={this.activeTitleKey}/>
                <Banner bannerProps={bannerProps}/>
            </div>
        )
    }
}

function mapStatetoProps({pageContent}){
    return {pageContent};
}

export default connect(mapStatetoProps)(PageCont);
