import React from 'react'
import "./ResumeCardDownloadStyle.css"
import img1 from "../assets/CVResume.png"

const ResumeCardDownload = () => {
  return (
    <div className='resume'>
        <div className='resume-card-container'>
            <div className='resume-card'>
                <img src={img1} alt="resume"  />
                <h3 className='card-title'>- Resume -</h3>
                <div className='resume-details'>
                    <p>This is my Resume</p>
                    <div className='res-buttons'>
                        <a href="https://github.com/CornelOlaru" target="_blank" rel="noopener noreferrer">  <button className='btn'>GitHub</button></a>
                        <a href="Corneliu Olaru Resume.pdf" download="Resume Corneliu Olaru.pdf"><button className='btn'>Download</button></a>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ResumeCardDownload;
