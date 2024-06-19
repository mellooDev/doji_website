import React from 'react';

function HeaderContent(props) {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-12">
                <div className="main_title">
                    <h2><span style={{ color: '#da2032' }}>{props.mainContent}</span></h2>
                </div>
            </div>
        </div>

    );
}

export default HeaderContent;