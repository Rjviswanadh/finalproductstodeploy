import React from 'react'

import { Hero } from '../Hero'
import { Services } from '../Services'
import { About } from '../About'
import { Process } from '../Process'
import { Gallery } from '../Gallery'
import Contact from '../Contact'


export const Home = () => {
  return (
     <div className="min-h-screen bg-white">
     {/*  <Header /> */}
      <main>
        <section id="home">
          <Hero />
        </section>
       {/*  <section id="services">
          <Services />
        </section> */}
        <section id="about">
          <About />
        </section>
        <section id="process">
          <Process />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
     {/*  <Footer /> */}
    </div>
  )
}
