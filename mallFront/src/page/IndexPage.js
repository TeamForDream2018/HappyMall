import React from 'react';
import { connect } from 'dva';

import Nav from '../components/nav/nav'

import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.content}>
        <div className={styles.common_cont}>
             <Nav />
        </div>
    </div>
  );
}

function mapStatetoProps({indexPage}){
    console.log({indexPage})
    return {indexPage}
}

export default connect(mapStatetoProps)(IndexPage);
