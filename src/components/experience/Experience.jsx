import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
function experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
      <div className='experience__backend'>
       <div className='experience__content'>
          <article className='experience__details'>
           <BsPatchCheckFill/>
           <div>
           <h4>HTML</h4>
           <small className='text-light' id='al'>Experienced</small>
           </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill/>
           <div>
           <h4>CSS</h4>
           <small className='text-light' id='al'>Experienced</small>
           </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill/>
          <div>
          <h4>Bootstrap</h4>
           <small className='text-light' id='al'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill/>
           <div>
           <h4>Javascript</h4>
           <small className='text-light' id='al'>Intermediate</small>
           </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill/>
           <div>
           <h4>React</h4>
           <small className='text-light' id='al'>Intermediate</small>
           </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill/>
           <div>
           <h4>Angular</h4>
           <small className='text-light' id='al'>Experienced</small>
           </div>
          </article>
         </div>
       </div>

{/* END OF FRONTEND */}

       <div className='experience__backend'>
        <h3> Backend Development</h3>
         <div className='experience__content'>
          <article className='experience__details'>
           <BsPatchCheckFill/>
           <div>
           <h4>RESTfull API</h4>
           <small className='text-light' id='al'>Experienced</small>
           </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill/>
           <div>
           <h4>Django</h4>
           <small className='text-light' id='al'>Experienced</small>
           </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill/>
           <div>
           <h4>Python</h4>
           <small className='text-light' id='al'>Experienced</small>
           </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill />
          <div>
          <h4>Flask</h4>
           <small className='text-light' id='al'>Intermediate</small>
          </div>
          </article>
          <article className='experience__details'>
           <BsPatchCheckFill/>
           <div>
           <h4>Postgres</h4>
           <small className='text-light' id='al'>Experienced</small>
           </div>
          </article>
         </div>
       </div>


      
      </div>
      </section>
  )
}

export default experience