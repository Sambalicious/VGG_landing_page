import React from 'react'
import Navbar from './Navbar';
import Internship from './Internship'
import Tracks from './Tracks';
import Introduction from './Introduction';
import InternActivities from './InternActivities';


const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Introduction />
            <Internship />
            <InternActivities />
            <Tracks />
        </div>
    )
}

export default LandingPage
