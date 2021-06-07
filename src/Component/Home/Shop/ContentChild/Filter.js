import React from 'react';

function Filter(props) {
    return (
        <div className="border p-4 rounded mb-4">
            <div className="mb-4">
            <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
            <div id="slider-range" className="border-primary" />
            <input type="text" name="text" id="amount" className="form-control border-0 pl-0 bg-white" disabled />
            </div>
            <div className="mb-4">
            <h3 className="mb-3 h6 text-uppercase text-black d-block">Size</h3>
            <label htmlFor="s_sm" className="d-flex">
                <input type="checkbox" id="s_sm" className="mr-2 mt-1" /> <span className="text-black">Small (2,319)</span>
            </label>
            <label htmlFor="s_md" className="d-flex">
                <input type="checkbox" id="s_md" className="mr-2 mt-1" /> <span className="text-black">Medium (1,282)</span>
            </label>
            <label htmlFor="s_lg" className="d-flex">
                <input type="checkbox" id="s_lg" className="mr-2 mt-1" /> <span className="text-black">Large (1,392)</span>
            </label>
        </div>
    </div>
    );
}

export default Filter;