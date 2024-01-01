// Tab.js
import React from 'react';

const Tab = ({ label, onClick, isActive }) => {
    const tabStyle = {
        borderBottom: isActive ? '2px solid green' : 'none',
    };

    return (
        <div className="tab" style={tabStyle} onClick={onClick}>
            {label}
           
        </div>
    );
};

export default Tab;
