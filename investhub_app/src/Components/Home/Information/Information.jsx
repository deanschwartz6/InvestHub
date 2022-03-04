import React from 'react';
import './information.css';

function Information(){
    return (
        <div className="information-content">
            <div className="top-text">
                <h4 className="top-text-elements">AMOUNT RAISED<br/><span className="bottom-text-elements"><h2>$400M+</h2></span></h4>
                <h4 className="top-text-elements">PROSPECTIVE INVESTORS<br/><span className="bottom-text-elements"><h2>510K</h2></span></h4>
                <h4 className="top-text-elements">CURRENT OPPROTUNITIES<br/>
                    <span id="co-opportunities">
                        <h3><span style={{ fontSize: "1.2em" }}>30</span><br/>Live</h3>
                        <h5>More Coming Soon!<br/><span style={{color: "#FF6F4F"}}>Secondary Market</span></h5>
                    </span>
                </h4>
                <h4 className="top-text-elements">COMMUNITY POPULATION<br/><span className="bottom-text-elements"><h2>$400M</h2></span></h4>
            </div>
        </div>
    );
}

export default Information;