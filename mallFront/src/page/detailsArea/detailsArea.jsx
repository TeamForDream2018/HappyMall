import React from 'react';

import {connect} from 'dva';
import * as styles from './detailsArea.less';

class DetailsArea extends React.Component{
    render(){
        const {router,details} = this.props;
        const {listdetail} = details;
        return(
            <div>
                {
                    listdetail && listdetail.children && listdetail.children.map((item,index)=>{
                        return <span key={"details_"+index}>{item.name}</span>
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
