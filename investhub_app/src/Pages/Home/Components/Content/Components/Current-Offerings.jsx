import React from 'react';
import './current-offerings.css';

function CurrentOfferings(){
    return (
        <div className="current-offerings-content">
            <h3>OUR CURRENT OFFERINGS</h3>
            <hr className="current-offerings-hr" />
            <div className="drop-down-selections">

                <select name="region" className="drop-down-element region">
                    <option value="" disabled selected hidden>Region</option>
                    <option value="united_states">United States</option>
                </select>

                <select name="industry" className="drop-down-element industry">
                    <option value="" disabled selected hidden>Industry</option>
                    <option value="fintech">FinTech</option>
                </select>

                <button className="drop-down-element sdg-button">
                    SDG - Impact Investment <br/> Sustainable Development Goal
                </button>

                <select name="filter" className="drop-down-element filter">
                    <option value="" disabled selected hidden>Filter By</option>
                    <option value="just-launched">Just Launched</option>
                </select>

                <select name="funded" className="drop-down-element funded">
                    <option value="" disabled selected hidden>Most Funded</option>
                    <option value="konzortia_capital">Konzortia Capital</option>
                </select>

            </div>
            <div className="drop-down-tags">
                <button>X Clear All</button>
            </div>
        </div>
    );
}

export default CurrentOfferings;