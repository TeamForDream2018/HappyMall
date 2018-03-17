import React from 'react';
import { connect } from 'dva';

import ScrollAnim from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import TitleDisplay from '../../components/common/titleDisplay/titleDisplay';
import Banner from '../../components/common/banner/banner';
import * as styles from './pageContent.less';
import DisplayArea from '../../components/common/displayarea/displayarea';
import DisplayArea2 from '../../components/common/displayarea/displayarea2';

var Animate = require('rc-animate');
var TweenOneGroup = TweenOne.TweenOneGroup;
const ScrollOverPack = ScrollAnim.OverPack;

class PageCont extends React.Component{
    constructor(props){
        super(props)
        this.state={
            menuList:[],
        }
    }

    activeTitleKey =(key)=> {
        this.props.dispatch({
            type:"pageContent/updateActiveKey",
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
                    <TweenOneGroup animation={{"type":"from"}}><TitleDisplay key="b" menuList={menuList} title_active_id={title_active_id} activeTitleKey={this.activeTitleKey}/></TweenOneGroup>
                    <Banner key="c" bannerProps={bannerProps}/>
                    <ScrollOverPack key="pageTwo" playScale={0.5} animation={{ease:"easeInQutQuad"}} style={{height:"100vh"}}>
                        <DisplayArea lists={menuList[0]} key="displayArea"/>
                        <DisplayArea2 lists={menuList[0]} key="displayArea2"/>
                    </ScrollOverPack>
                 </div>
        )
    }
}

function mapStatetoProps({pageContent}){
    return {pageContent};
}

export default connect(mapStatetoProps)(PageCont);
