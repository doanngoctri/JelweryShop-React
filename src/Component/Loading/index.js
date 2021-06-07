import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../images/unnamed.gif';
import './asset.css';
function Index(props) {
    const loading = useSelector(state => state.Loading);
    if(loading === false) return null;
    return (
        <div className="loading-container">
                <div className="loading-modal"></div>
                <div className="loading-item">
                    <div className="loading-body">
                            <img src={Loading}></img>
                    </div>
                </div>
        </div>
    );
}

export default Index;