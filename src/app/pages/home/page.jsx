import FooterPage from '@/app/components/Footer/page'
import NavBar from '@/app/components/NavBar/NavBar'
import CardPage from '@/app/components/cards/page'
import HomePage from '@/app/components/home/page'
import SectionPage from '@/app/components/section/page'
import Section1Page from '@/app/components/sectionOne/page'
import Section3Page from '@/app/components/sectionThree/page'
import Section2Page from '@/app/components/sectionTwo/page'
import React from 'react'

export const HomePages = () => {
    return (
        <>
            <NavBar />
            <HomePage />
            <CardPage />
            <SectionPage />
            <Section1Page />
            <Section2Page />
            <Section3Page />
            <FooterPage />
        </>
    )
}
