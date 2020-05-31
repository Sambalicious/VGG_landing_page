import React from 'react'
import InstructorDetails from './Utils/InstructorDetails'

const Instructors = () => {
    return (
        
            <div className="instructors">
    <h2 className="mb-5 text-center">Our Awesome Instructors</h2>
    <div className="owl-carousel owl-theme row">

        <InstructorDetails
            InstructorName={'Precious Uchendu'}
            InstructorTrack={'Frontend Engineer'}
            InstructorImage={"https://i.ibb.co/8Mk7BHR/Ellipse-9.png"}
            
        />

        <InstructorDetails
            InstructorName={'Azeezat R.'}
            InstructorTrack={'Software Engineer'}
            InstructorImage={"https://i.ibb.co/DD9j6cd/Ellipse-10.png"}
        />

        <InstructorDetails
            InstructorName={'Ameen Alade'}
            InstructorTrack={'UI/UX Designer'}
            InstructorImage={"https://i.ibb.co/4RL8jTP/Ellipse-8.png"}  
        />

        <InstructorDetails
            InstructorName={'Chidinma Okafor'}
            InstructorTrack={'Frontend Engineer'}
            InstructorImage={"https://i.ibb.co/YchQVzG/Ellipse-11.png"}   
        />
    </div>
</div>
    
    )
}

export default Instructors
