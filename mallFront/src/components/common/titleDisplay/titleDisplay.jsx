import React from 'react';
import {Icon,Input,message, Popover } from "antd";

import * as styles from './titleDisplay.less';

const TitleDisplay = ({
        menuList,
        title_active_id,
        activeTitleKey,
})=>{
     //保存主题
    let titles = [];
    function activeTitle(e){
        activeTitleKey(e.target.id);
    }

    if(!title_active_id){
        title_active_id = "titles_0";
    }

    menuList && menuList.length>0 && menuList.map((item,index)=>{
        let active_div = false;
        if(title_active_id == ("titles_"+index)){
            active_div = true;
        }else{
            active_div = false;
        }

        let child_menu = [];
        item && item.children.length>0 && item.children.map((item,index)=>{

            let child_cont = <div>
                <img style={{width:"16rem"}} src={item.imgurl} alt="简介"/>
            </div>

            item && child_menu.push(<div key={"menu_content_"+index} className={styles.menu_child_cont}><div key={"child_menu_"+index} className={styles.child_menu}>
                                        {item.name}
                                    </div><Popover trigger="hover" key={"child_cont_"+index} content={child_cont} title="英雄简介"><img key={"menu_cont_img"+index} className={styles.touxiang} src={item.imgurl} alt="头像"/></Popover></div>)
        })

        const content = (
              <div className={styles.prover_card} style={{  position: "absolute",left: (-2 - 4*index) + "rem",}}>
                {child_menu}
              </div>
            );
        let div_title = <Popover key={"titles_prover_"+index} trigger="hover" arrowPointAtCenter={true} placement="bottom" content={content}><div key={"titles_"+index} className={active_div ? styles.titles_active :styles.titles} id={"titles_"+index} onMouseEnter={(e)=>activeTitle(e)}>
                <div id={"titles_"+index} className={ active_div ? styles.circle : ""}></div>{item.name}
            </div></Popover>

        titles.push(div_title)
    })

     return(
            <div className={styles.titleBar}>
             {titles}
            </div>
    )
}

export default TitleDisplay;
