import React from 'react';

import {connect} from 'dva';
import * as styles from './detailsArea.less';

class DetailsArea extends React.Component{
    render(){
        const {router,details} = this.props;
        const {listdetail} = details;
        return(
            <div className={styles.main_cont}>
                {
                    listdetail && listdetail.children && listdetail.children.map((item,index)=>{
                        return <div className={styles.picOne} key={"picOne"+index}>
                            <img src={item.imgurl} className={styles.imgclass}/>
                            <p className={styles.intro}>{item.name}</p>
                            <div className={styles.price_cont}><p style={{marginRight:"5rem"}}><span>原价：</span><span className={styles.discont_price}>￥39.3</span></p>
                                                                <p><span className={styles.current_price_info}>现价：</span><span className={styles.current_price}>￥33.3</span></p></div>
                        </div>
                    })
                }
            </div>
        )
    }
}

function mapStatetoProps({details}){
    return {details}
}

export default connect(mapStatetoProps)(DetailsArea);
