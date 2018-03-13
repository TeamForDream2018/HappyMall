import React from "react";

import {Card} from "antd";
import * as styles from './displayarea.less';

const { Meta } = Card;
class DisplayArea extends React.Component{
    constructor(props){
        super(props);
    }
    hoverEnter=(e)=>{
        var mask = document.getElementById("mask_"+e.target.id.split("_")[1]);
        mask.style.display = "block";
        mask.classList.add("addmask");
    }

    hoverOut=(e)=>{
       e.target.style.display="none"
    }
    render(){
        const {lists} = this.props;

        let renderList = [];
        lists && lists.children && lists.children.length>0 && lists.children.map((item,index)=>{

            renderList.push(
                <Card key={"card_"+index}
                    className={styles.card1}
                    hoverable
                    style={{ width: 240 }}
                    cover={<div><img style={{width:"10rem"}} onMouseEnter={this.hoverEnter} id={"card_"+index} alt="图片" src={item.imgurl} /> <div onMouseOut={this.hoverOut} id={"mask_"+index} className={styles.mask}></div></div>}
                  >
                    <Meta className={styles.descrip}
                      description={item.name}
                    />
                </Card>
            )
        })
        let title =lists && lists.name
        return(
            <div>
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
                capArr.push(<div className={styles.fontstyle} key={"titlespan_"+i}>{title[i]}</div>);
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
