import React from 'react';

import {connect} from 'dva';
import * as styles from './detailsPic.less';
class DetailsPic extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div >
                detalisPic
            </div>
        )
    }
}

function mapStatetoProps({details}){
    return {details}
}

export default connect(mapStatetoProps)(DetailsPic);
