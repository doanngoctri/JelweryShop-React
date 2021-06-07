import React, { useEffect, useState } from 'react';
import Header from '../../Component/commons/Header';
import Footer from '../../Component/commons/Footer';
import {Link} from 'react-router-dom'
function HomePage(props) {
  
    return (
    <div className="App">
        <div className="site-wrap">
            <Header></Header>
            <div className="site-section">
                <div className="container">
                        <h1>Trang không tồn tại  <Link to="/"> .Quay về trang chủ </Link></h1>
                </div>
            </div>

            <Footer></Footer>
        </div>
    </div>
    );
}

export default HomePage;