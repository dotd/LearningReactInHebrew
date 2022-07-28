import React from 'react';

function TodayTime() {
    const today = new Date().toString();
    return (
        <div>{today}</div>
    );
}

export default TodayTime;