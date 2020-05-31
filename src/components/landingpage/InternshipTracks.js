import React from 'react'

const InternshipTracks = () => {
    return (
        <div>
              <div className="tracks">
        <h2 className="mb-5 green-text">Internship Tracks <br /> and Technologies</h2>
        <div className="row first">
            <div className="col-lg-6">
                <div className="py-3 mb-3 media pl-xl-4 pr-xl-4 col-xl-11">
                    <span className="mr-4">1</span>
                    <div className="media-body">
                      <h5 className="mb-2">Backend Development</h5>
                     C# | Java | Python (Separate tracks)
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="py-3 mb-3 media pl-xl-4 pr-xl-4 col-xl-11">
                    <span className="mr-4">2</span>
                    <div className="media-body">
                      <h5 className="mb-2">Frontend Development</h5>
                     HMTL, CSS, JS & ReactJS
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <div className="py-3 mb-3 media pl-xl-4 pr-xl-4 col-xl-11">
                    <span className="mr-4">3</span>
                    <div className="media-body">
                      <h5 className="mb-2">UI/UX Design</h5>
                     Figma
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="py-3 mb-3 media pl-xl-4 pr-xl-4 col-xl-11">
                    <span className="mr-4">4</span>
                    <div className="media-body">
                      <h5 className="mb-2">Software QA/QT</h5>
                     Software testing & Quality assurance
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default InternshipTracks
