// Tabs.js
import React, { useState } from 'react';
import Tab from './Tab';
import Python from './Python';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import './App.css'
const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Python');

    const handleTabClick = (label) => {
        setActiveTab(label);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'Python':
                return <Python />;
            case 'Full Stack Development':
                return <FullStackDevelopment />;
            case 'Data Science':
                return <DataScience />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="tabs-container">
                <Tab label="Python" onClick={() => handleTabClick('Python')} isActive={activeTab === 'Python'} />
                <Tab
                    label="Full Stack Development"
                    onClick={() => handleTabClick('Full Stack Development')}
                    isActive={activeTab === 'Full Stack Development'}
                />
                <Tab label="Data Science" onClick={() => handleTabClick('Data Science')} isActive={activeTab === 'Data Science'} />
                {/* Add more tabs as needed */}

            </div>
<hr />
            <div className='image-container'>
                {renderContent()}
            </div>

        </div>
    );
};

export default Tabs;
