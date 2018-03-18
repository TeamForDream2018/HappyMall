import React from 'react';

import {connect} from 'dva';
import * as styles from './detailsArea.less';

class DetailsArea extends React.Component{
    render(){
        const {router} = this.props;
        return(
            <div>
                detailsArea
            </div>
        )
    }
}

export default DetailsArea;
