import React from 'react'

const Instructors = () => {
    return (
        
            <div className="instructors">
    <h2 className="mb-5 text-center">Our Awesome Instructors</h2>
    <div className="owl-carousel owl-theme row">
        <div className="item col-4">
            <img className="vector" src="https://i.ibb.co/f1Sh0Vq/Vector-2.png" alt="placeholder" border="0"/>
                <img className="tutor" src="https://i.ibb.co/8Mk7BHR/Ellipse-9.png" alt="Precious"/>
                <div style={{textAlign:"center"}}>
                    <h5>Precious Uchendu</h5>
                    <p className="text-secondary">Frontend Engineer</p>
                </div>
        </div>
        <div className="item col-4">
            <img className="vector" src="https://i.ibb.co/f1Sh0Vq/Vector-2.png" alt="placeholder" border="0"/>
            <img className="tutor" src="https://i.ibb.co/DD9j6cd/Ellipse-10.png" alt="Azeezat"/>
            <div style={{textAlign:"center"}}>
                <h5>Azeezat R.</h5>
                <p className="text-secondary">Software Engineer</p>
            </div>
        </div>
        <div className="item col-4">
            <img className="vector" src="https://i.ibb.co/f1Sh0Vq/Vector-2.png" alt="placeholder" border="0"/>
            <img className="tutor" src="https://i.ibb.co/4RL8jTP/Ellipse-8.png" alt="Ameen"/>
            <div style={{textAlign:"center"}}>
                <h5>Ameen Alade</h5>
                <p className="text-secondary">UI/UX Designer</p>
            </div>
        </div>
        <div className="item col-4">
            <img className="vector" src="https://i.ibb.co/f1Sh0Vq/Vector-2.png" alt="placeholder" border="0"/>
            <img className="tutor" src="https://i.ibb.co/YchQVzG/Ellipse-11.png" alt="Chidinma"/>
            <div style={{textAlign:"center"}}>
                <h5>Chidinma Okafor</h5>
                <p className="text-secondary">Frontend Engineer</p>
            </div>
        </div>
    </div>
</div>
    
    )
}

export default Instructors
