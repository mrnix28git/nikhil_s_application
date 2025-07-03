import FooterCTA from '@/components/common/AdsCamp'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import React from 'react'

const AboutUs = () => {
    return (
        <div>
          
            <div>
                <div className="flex flex-col gap-5 items-center justify-center w-1/2  p-10">
                    <h1 className='self-start text-2xl font-poppins font-bold'>Our Journey</h1>
                    <p>We are dedicated to help people understand Astrology, learn Astrology online, and become self-employed astrologers.
                        We started 10 years back and have educated around 24k+ students since then. Occult Gurukul made a mark on delivering the best knowledge about Astrology all across the world by providing courses on Vedic Astrology, Palmistry, Tarot Card Reading, Numerology, Vastu, and all the related fields..</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center p-4 bg-gradient-to-b from-[#fdc54c] to-[#f52d59] text-white'>
                    <h1 className='self-center text-2xl font-poppins font-bold p-4'>Our Mission</h1>
                    <p className='p-4'>Our mission is to provide the best knowledge about Astrology and related fields to the world. We aim to help people understand the power of Astrology and how it can be used to improve their lives. We believe that everyone should have access to this knowledge, and we are committed to making it available to as many people as possible.</p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutUs