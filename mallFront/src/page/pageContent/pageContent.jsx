import React from 'react';
import { connect } from 'dva';

import TitleDisplay from '../../components/common/titleDisplay/titleDisplay';
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
        let {menuList,title_active_id} = this.props.pageContent

        return(
            <div className={styles.pageCont}>
                <TitleDisplay menuList={menuList} title_active_id={title_active_id} activeTitleKey={this.activeTitleKey}/>
            </div>
        )
    }
}

function mapStatetoProps({pageContent}){
    return {pageContent};
}

export default connect(mapStatetoProps)(PageCont);
