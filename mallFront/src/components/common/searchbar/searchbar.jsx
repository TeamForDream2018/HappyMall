import React from 'react';
import {Icon,Input,message} from "antd";

import * as styles from './searchbar.less'

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchbar_active:true,
        }
    }

    changeBtnActive=()=>{
        if(this.refs.search_cont.input.value){
            this.setState({
			     searchbar_active:false,
		    })
            console.log(this.refs.search_cont.input.value)
             /*回掉函数传值回去*/
        }else{
            message.error("请输入搜索条件！",2)
        }
    }

    changeBtnStatic=()=>{
        this.setState({
			searchbar_active:true,
		})
    }

    keySerch=(e)=>{
       e.keyCode == 13 && this.changeBtnActive();
    }

    render(){
        const {searchbar_active} = this.state;
        return(
            <div className={styles.main_content}>
                <div className={styles.search_img_icon}></div>
                <div className={styles.search_cont}>
                    <div className={styles.searchBox}><Input size="large" placeholder="请输入搜索内容" ref="search_cont" onKeyDown={this.keySerch}/></div>
                    <div className={searchbar_active ? styles.searchBtn : styles.searchBtn_active} ><Icon onClick={this.changeBtnActive} onMouseOut={this.changeBtnStatic} type="search"></Icon></div>
                </div>
                <div className={styles.test}></div>
            </div>
        )
    }
}

export default SearchBar;
