import React from "react";

import {Card} from "antd";
import * as styles from './displayarea.less';


const { Meta } = Card;
const moment = require("moment");

class DisplayArea extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current_page:"",//当前翻转的图片
            latest_page:"",//最后一次翻转的图片
            latest_time:"",
        }
    }

    //蒙层事件
    hoverEnter=(e)=>{
        var mask = document.getElementById("mask_"+e.target.id.split("_")[1]);
        mask.style.display = "block";
        mask.classList.add("addmask");
    }

    hoverOut=(e)=>{
       e.target.style.display="none"
    }

    //翻页时间

     changePage1=(e)=>{
        //获取当前时间
//        const now = moment();
        //相邻两次滑动的时间差
//        let diffSecond = 0;
        let {latest_time,latest_page} = this.state;
        //关闭上次未关闭的图片
        if(latest_page){
           this.refs[latest_page].style.transform="rotateY(360deg)";
        }

/*        if(latest_time){
            diffSecond = now.diff(latest_time,"seconds")
        }else{//第一次滑动式，latest_time为空
            diffSecond = 501;
        }*/

//        if(diffSecond>=0.3){
            this.setState({
                current_page:e.target.id,
//                latest_time:now,
                latest_page:e.target.id,
            })
            this.refs[e.target.id].style.transform="rotateY(180deg)";
//        }
    }

    changePage2=(e)=>{
        this.refs[this.state.current_page].style.transform="rotateY(360deg)";
        const {current_page,latest_page} = this.state;
        if(latest_page){
           this.refs[latest_page].style.transform="rotateY(360deg)";
        }
        this.refs[current_page].style.transform="rotateY(360deg)";
        this.setState({
            latest_page:current_page,
        })
    }

    render(){
        const {lists,type} = this.props;

        let renderList = [];
        //样式控制
        lists && lists.children && lists.children.length>0 && lists.children.map((item,index)=>{
            if(index >= 8){//首页最多展示8件物品
               return;
            }
            if(type == "1"){
               renderList.push(
                    <Card key={"card_"+index}
                        className={styles.card1}
                        hoverable
                        style={{ width: 240 }}
                        cover={<div><img style={{width:"10rem",boxShadow: "0px 0 13px 1px #000"}} onMouseEnter={this.hoverEnter} id={"card_"+index}
                                        alt="图片" src={item.imgurl} />
                               <div onMouseOut={this.hoverOut} id={"mask_"+index} className={styles.mask}>{item.name}</div></div>}
                      >
                    </Card>
                )
            }else if(type == "2"){
                renderList.push(
                    <div key={"state_"+index} className={styles.state} >
                        <div className={styles.page_cont} ref={"page_cont_"+index}>
                            <div className={styles.front}><img style={{boxShadow: "0px 0 13px 1px #000"}} alt="图片" src={item.imgurl} id={"page_cont_"+index} onMouseEnter={this.changePage1}/></div>
                            <div className={styles.back} onMouseOut={this.changePage2}>{item.name}</div>
                        </div>
                    </div>
                )
            }
        })
        //设置查看详情样式
        renderList && renderList.length>0 && renderList.push(
            <div className={styles.showMore_btn} key={"showmorebtn"}>
                <div className={styles.showMoreActive}>
                     查看更多<p className={styles.showMoreArrow1}>></p><p className={styles.showMoreArrow2}>></p><p className={styles.showMoreArrow3}>></p>
                </div>
            </div>
        )

        let title =lists && lists.name
        return(
            <div style={{marginTop:"2rem"}}>
                <Title title={title} type={type}/>
                <div className={styles.goodsdisplay}>
                    {renderList && renderList}
                </div>
            </div>
        )
    }
}

class Title extends React.Component{
    render(){
        const {title,type} = this.props;
        let capArr = [];
        if(title && type == "1"){
            for(var i = 0;i<title.length;i++){
                capArr.push(<div className={styles.fontstyle} key={"titlespan_"+i}>{title[i]}</div>);
            }
        }else if(title && type == "2"){
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
export default DisplayArea;
