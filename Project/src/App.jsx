// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Head from '../headComponent'
import Main from '../mainComponent'
import data from '../data.js'

const mainElement = data.map(function(d) {
  return (
    <Main 
      img = {d.img}
      googleMap = {d.googleMapsLink}
      country = {d.country}
      locationName = {d.title}
      time = {d.dates}
      text = {d.text}
    />
  )

})

console.log(mainElement)

function App() {
  return (
    <>
      <Head />
      {mainElement}
      {/* <Main 
            img = {{src:"./public/mount-fuji.jpg", alt:"mount fuji image"}}
            country = 'Japan'
            googleMap = 'https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D'
            locationName = 'Mount Fuji'
            time = '12 Jan, 2021 - 24 Jan, 2021'
            text = 'Mount fuji is the tallest mountain in japan, standing at 3776 meters.Mount fuji is the single most popular tourist site in japan, for both japanese and foreign tourists.'
      />
      <Main 
            img = {{src:"./public/mount-fuji.jpg", alt:"mount fuji image"}}
            country = 'Japan'
            googleMap = 'https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D'
            locationName = 'Mount Fuji'
            time = '12 Jan, 2021 - 24 Jan, 2021'
            text = 'Mount fuji is the tallest mountain in japan, standing at 3776 meters.Mount fuji is the single most popular tourist site in japan, for both japanese and foreign tourists.'    
      /> */}
    </>
  )
}

export default App
