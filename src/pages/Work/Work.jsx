import React from 'react'
import './work.css'
import {projects} from '../../utils/constants'

const Work = () => {
    console.log(projects)
  return (
    <div className='container work__container'>
        <div className="inner__container">
            {projects.map((project, index) => (
                <div className="project__container" key={index}>
                     <h1 className='project__title'>{project.slug}</h1> 
                </div>
              
            ))}
        </div>
    </div>
  )
}

export default Work