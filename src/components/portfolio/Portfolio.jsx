import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data= [
  {
    id: 1,
  image: IMG1,
  title: 'Github Search',
  github: 'https://github.com/12moi/git-search',
  live:'https://12moi.github.io/git-search/user-profile'
  },
  {
    id: 2,
  image: IMG2,
  title: 'Pictureshare App',
  github: 'https://github.com/12moi/picture-world',
  live:'picturesharem.herokuapp.com/'
  },
  {
    id: 3,
  image: IMG3,
  title: 'hood',
  github: 'github.com/12moi/hood',
  live:'https://hood12.herokuapp.com/account/login/?next=/'
  },
  {
    id: 4,
  image: IMG4,
  title: 'Blog App',
  github: 'https://github.com/12moi/Blog',
  live:'kelord-blog.herokuapp.com/'
  },
  {
    id: 5,
  image: IMG5,
  title: 'News_app',
  github: 'https://github.com/12moi/News-App',
  live:'https://moinews.herokuapp.com/'
  },
  {
    id: 6,
  image: IMG6,
  title: 'Django RESTful API',
  github: 'https://github.com/12moi/worklinks',
  live:'http:/moiwork.herokuapp.com'
  },
]


function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
       {
        data.map(({id, title, image, github, live})=>{
          return(
            <article key={id} className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className='portfolio-cta'>
        <a href={github} className='btn' target='_blank'> Github</a>
        <a href={live} className='btn btn-primary' >Live link</a>
        </div>
       </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio