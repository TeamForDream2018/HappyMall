import React from 'react';
import { Affix, Button } from 'antd';
import {connect} from 'dva';
import * as styles from './detailsArea.less';
import {Link} from 'react-router';



class DetailsArea extends React.Component{

    backtoprev=()=>{
       window.history.go(-1);
    }
    render(){
        const {router,details,children} = this.props;
        const {listdetail} = details;
        return(
            <div className={styles.main_cont}>
                {
                   children ? children :
                        (listdetail && listdetail.children && listdetail.children.map((item,index)=>{
                                return <Link to={{pathname:"details.html/goodsdetails",state:{...item}}} className={styles.picOne} key={"picOne"+index}><div style={{width:"100%"}}>
                                                <img src={item.imgurl} className={styles.imgclass}/>
                                                <p className={styles.intro}>{item.name}</p>
                                                <div className={styles.price_cont}>
                                                    <p style={{marginRight:"5rem"}}><span>原价：</span><span className={styles.discont_price}>￥39.3</span></p>
                                                    <p><span className={styles.current_price_info}>现价：</span><span className={styles.current_price}>￥33.3</span></p>
                                                </div>
                                            </div>
                                        </Link>
                            })
                        )
                }

                {children ?
                   <Affix style={{ width:"7rem",height:"2rem",position: 'absolute',top: "calc(50% - 1rem)", left: "calc(50% - 3.5rem)"}}>
                    <Button style={{ width:"7rem",height:"2rem",    background: "#666",color: "#fff"}} onClick={this.backtoprev}>返回上一页</Button>
                  </Affix>:""}
            </div>
        )
    }
}

function mapStatetoProps({details}){
    return {details}
}

export default connect(mapStatetoProps)(DetailsArea);
