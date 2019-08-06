import React from 'react';

import './loader.css';

const Loader = () => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-disk">
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;