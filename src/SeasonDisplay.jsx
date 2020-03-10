import './seasonDisplay.css';
import React from 'react';

const SeasonDisplay = (props) => {
    var lat = props.lat;
    var mes = new Date().getMonth();
    const season = getSeason(lat, mes);
    console.log(season);
    //const {text,iconName}= seasonConfig[season];
    var text =seasonConfig[season].text;
    var iconName = seasonConfig[season].iconName;
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} ></i>
            <h1> {text}</h1>
              <i className={`icon-right massive ${iconName} icon`}></i>
        </div>

    );
};

const seasonConfig = {

    summer:{
        text: 'hace calor',
        iconName : 'sun'
    },
    winter: {
        text:'hace frio',
        iconName : 'snowflake'

    }
};

const getSeason = (lat, month) => {

    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};



export default SeasonDisplay;