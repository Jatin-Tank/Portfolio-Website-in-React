import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


export default function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience__web">
        <h3>Full-Stack Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div> <h4>HTML</h4>
            <small className="text-light">Experienced</small>
            </div>          
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div> <h4>CSS</h4>
            <small className="text-light">Experienced</small>
            </div>          
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div> <h4>JavaScript</h4>
            <small className="text-light">Intermediate</small>
            </div>          
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div> <h4>Bootstrap</h4>
            <small className="text-light">Experienced</small>
            </div>          
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div> <h4>SCSS</h4>
            <small className="text-light">Basic</small>
            </div>          
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div> <h4>React</h4>
            <small className="text-light">Intermediate</small>
            </div>          
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div> <h4>Node.js</h4>
            <small className="text-light">Intermediate</small>
            </div>          
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div> 
            <h4>Express.js</h4>
            <small className="text-light">Intermediate</small>
            </div>          
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div> <h4>MongoDB</h4>
            <small className="text-light">Intermediate</small>
            </div>          
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div> <h4>MySQL</h4>
            <small className="text-light">Basic</small>
            </div>          
          </article>
          
          
        </div>

      </div>

      {/* END OF FULL STACK  */}
      <div className="experience__other">
    
        <h3>Other Languages</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div> <h4>HTML</h4>
            <small className="text-light">Experienced</small>
            </div>          
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div> <h4>CSS</h4>
            <small className="text-light">Experienced</small>
            </div>          
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div> <h4>JavaScript</h4>
            <small className="text-light">Intermediate</small>
            </div>          
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div> <h4>Bootstrap</h4>
            <small className="text-light">Experienced</small>
            </div>          
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div> <h4>SCSS</h4>
            <small className="text-light">Beginner</small>
            </div>          
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div> <h4>React</h4>
            <small className="text-light">Intermediate</small>
            </div>          
          </article>
          
        </div>

     
      </div>
      
    </div>
    
    </section>
  )
}
