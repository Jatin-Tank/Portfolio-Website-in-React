import React from 'react'
import './Portfolio.css'

import IMG1 from '../../assets/avatar1.png'
import IMG2 from '../../assets/avatar1.png'
import IMG3 from '../../assets/avatar1.png'
import IMG4 from '../../assets/avatar1.png'
import IMG5 from '../../assets/avatar1.png'
import IMG6 from '../../assets/avatar1.png'

const data = [
  {
    id:1,
    image : IMG1,
    title: 'Crypto Currency',
    github: 'https://github.com',
    demo : 'https://dribble.com/Alien_pixels'
  },
  {
    id:2,
    image : IMG1,
    title: 'Crypto Currency',
    github: 'https://github.com',
    demo : 'https://dribble.com/Alien_pixels'
  },
  {
    id:3,
    image : IMG1,
    title: 'Crypto Currency',
    github: 'https://github.com',
    demo : 'https://dribble.com/Alien_pixels'
  },
  {
    id:4,
    image : IMG1,
    title: 'Crypto Currency',
    github: 'https://github.com',
    demo : 'https://dribble.com/Alien_pixels'
  },
  {
    id:5,
    image : IMG1,
    title: 'Crypto Currency',
    github: 'https://github.com',
    demo : 'https://dribble.com/Alien_pixels'
  },
  {
    id:6,
    image : IMG1,
    title: 'Crypto Currency',
    github: 'https://github.com',
    demo : 'https://dribble.com/Alien_pixels'
  }

]

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       

       {
        data.map(({id, image, title, github, demo}) => {
          return (
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          
          <div className="portfolio__item-cta">
            <a href={github} className='btn'  target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        )
        })
       }
        
      </div>
    </section>
  )
}
