import React from 'react'
import './Testimonials.css'

import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar1.png'
import AVTR3 from '../../assets/avatar1.png'
import AVTR4 from '../../assets/avatar1.png'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";


const data = [
  {
    avatar : AVTR1,
    name : 'Tina Snow',
    review : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque nulla cumque assumenda architecto provident nemo odit voluptatum, dignissimos aliquid commodi reprehenderit minima non fugiat incidunt laboriosam maxime. Pariatur, perferendis.'

  },
  {
    avatar : AVTR2,
    name : 'Tina Snow',
    review : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque nulla cumque assumenda architecto provident nemo odit voluptatum, dignissimos aliquid commodi reprehenderit minima non fugiat incidunt laboriosam maxime. Pariatur, perferendis.'

  },
  {
    avatar : AVTR1,
    name : 'Tina Snow',
    review : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque nulla cumque assumenda architecto provident nemo odit voluptatum, dignissimos aliquid commodi reprehenderit minima non fugiat incidunt laboriosam maxime. Pariatur, perferendis.'

  },
  {
    avatar : AVTR1,
    name : 'Tina Snow',
    review : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque nulla cumque assumenda architecto provident nemo odit voluptatum, dignissimos aliquid commodi reprehenderit minima non fugiat incidunt laboriosam maxime. Pariatur, perferendis.'

  },
  {
    avatar : AVTR1,
    name : 'Tina Snow',
    review : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque nulla cumque assumenda architecto provident nemo odit voluptatum, dignissimos aliquid commodi reprehenderit minima non fugiat incidunt laboriosam maxime. Pariatur, perferendis.'

  },

]


export default function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container mySwiper"
      navigation={true} modules={[Navigation]} 
      >
       {
        data.map(({avatar, name, review},index) => {

          return (
            <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt="Avatar-img" />
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>
            {review}
          </small>
        </SwiperSlide>
          )
        })
       }

      </Swiper>
    </section>
  )
}
