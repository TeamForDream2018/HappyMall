import React from "react";

import {Card} from "antd";
import * as styles from './displayarea.less';

const { Meta } = Card;
class DisplayArea2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current_page:"",
        }
    }
    changePage1=(e)=>{
        this.setState({
            current_page:e.target.id,
        })
        this.refs[e.target.id].style.transform="rotateY(180deg)";
    }

    changePage2=(e)=>{
        console.log(this.state.current_page)
        this.refs[this.state.current_page].style.transform="rotateY(360deg)";
    }
    render(){
        const {lists} = this.props;

        let renderList = [];

        let type = "1";
        //样式控制
        lists && lists.children && lists.children.length>0 && lists.children.map((item,index)=>{
            if(index >= 8){
               return;
            }
            renderList.push(
                <div key={"state_"+index} className={styles.state} >
                    <div className={styles.page_cont} ref={"page_cont_"+index}>
                        <div className={styles.front}><img alt="图片" src={item.imgurl} id={"page_cont_"+index} onMouseEnter={this.changePage1}/></div>
                        <div className={styles.back} onMouseOut={this.changePage2}>{item.name}</div>
                    </div>
                </div>
            )
        })
        let title =lists && lists.name

        renderList && renderList.length>0 && renderList.push(
            <div className={styles.showMore_btn} key={"showmorebtn"}>
                <div className={styles.showMoreActive}>
                     查看更多<p className={styles.showMoreArrow1}>></p><p className={styles.showMoreArrow2}>></p><p className={styles.showMoreArrow3}>></p>
                </div>
            </div>
        )
        return(
            <div style={{marginTop:"2rem"}}>
                <Title title={title}/>
                <div className={styles.goodsdisplay}>
                    {renderList && renderList}
                </div>
            </div>
        )
    }
}

class Title extends React.Component{
    render(){
        const {title} = this.props;
        let capArr = [];
        if(title){
            for(var i = 0;i<title.length;i++){
                let current_style_name = "title_jump_" + i;
                capArr.push(<div className={styles[current_style_name]} key={"titlespan_"+i}>{title[i]}</div>);
            }
        }
        return(
            <div className={styles.listTitle}>
                {
                   capArr
                }
            </div>
        )
    }
}
export default DisplayArea2;
