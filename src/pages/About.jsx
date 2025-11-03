import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'


const About = () => {
  return (
    <div>

      {/* About Us Title */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
       
      {/* About Section */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full max-w-[450px]' src={assets.about_img} alt="About Sakoon" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Sakoon — born over a feeling, not a trend.  
            We design timeless pieces that bring comfort, calm, and confidence to your everyday style.  
            Every stitch tells a story of simplicity, ease, and modern living — because true style begins with Sakoon.
          </p>

          <p>
            Sakoon was born over a quiet thought — that fashion should feel as good as it looks.  
            Our pieces are made for those who seek calm in chaos, comfort in movement, and beauty in simplicity.  
            Wear your peace. Wear Sakoon.
          </p>
         
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Born from a moment of calm, Sakoon exists to remind you that true fashion is peace in motion.  
            Our mission is to craft clothing that speaks softly, fits beautifully, and carries the spirit of stillness in every thread.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      
      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1'>
          <b>Quality Assurance</b>
          <p className='text-gray-600' >We carefully design and craft every piece to meet the highest standards of comfort, durability, and style.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1'>
          <b>Convenience</b>
          <p className='text-gray-600' >From browsing to delivery, we make your shopping experience effortless and smooth — just like our fabrics.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600' >We’re here for you at every step — because true luxury is not just in our clothes, but in the care we provide.</p>
        </div>

      </div>
       <NewsletterBox/>
    </div>
  )
}

export default About
