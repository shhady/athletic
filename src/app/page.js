import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import AboutUs from '@/components/AboutUs/AboutUs'
import WhyUs from '@/components/WhyUs/WhyUs'
import Pricing from '@/components/Pricing/Pricing'
import Gallery from '@/components/Gallery/Gallery'


export default function Home() {
  return (
    <>
    <main>
      <Hero/>
      <AboutUs/>
      <WhyUs/>
      <Pricing/>
      <Gallery/>
    </main>
    </>
  )
}
