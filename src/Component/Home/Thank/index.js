import React from 'react';
import Header from './../../commons/Header';
import Footer from './../../commons/Footer';
import Content from './Content';
function index(props) {
    return (
        <div className="site-wrap">
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
      </div>      
    );
}

export default index;