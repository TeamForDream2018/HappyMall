import React from 'react';
import {Icon,Input,message} from "antd";

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

     console.log(title_active_id)

    menuList && menuList.length>0 && menuList.map((item,index)=>{
        let active_div = false;
        if(title_active_id){
            console.log(title_active_id)
            if(title_active_id == ("titles_"+index)){
                active_div = true;
            }else{
                active_div = false;
            }
        }
        let div_title = <div key={"titles_"+index} className={styles.titles} id={"titles_"+index} onClick={(e)=>activeTitle(e)}>
                <div id={"titles_"+index} className={ active_div ? styles.circle : ""}></div>{item.name}
            </div>
        titles.push(div_title)
    })

    console.log(titles,"asd")
     return(
            <div className={styles.titleBar}>
             {titles}
            </div>
    )
}

export default TitleDisplay;
