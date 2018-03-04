import React from 'react';
import { connect } from 'dva';

import Nav from '../components/nav/nav';//nav
import SearchBar from '../components/common/searchbar/searchbar';//搜索条
import BreadCrumb from '../components/common/breadcrumb/breadcrumb';//面包屑导航条

import styles from './IndexPage.css';

function IndexPage(
    {
        children,
        routes,
    }
) {
  return (
    <div className={styles.content}>
        <div className={styles.common_cont}>
             <Nav />
        </div>
      <div className={styles.page_cont}>
        <SearchBar />
        <BreadCrumb routes={routes}/>
        {children}
      </div>
    </div>
  );
}

function mapStatetoProps({indexPage}){
    return {indexPage}
}

export default connect(mapStatetoProps)(IndexPage);
