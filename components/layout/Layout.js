
'use client'
import { Suspense, useEffect, useState } from "react"
import dynamic from 'next/dynamic'
import BackToTop from '../elements/BackToTop'
import Loading from '@/app/loading'

// Dynamically import heavy components
const DataBg = dynamic(() => import('../elements/DataBg'), { ssr: false })
const Breadcrumb = dynamic(() => import('./Breadcrumb'))
const HeaderCart = dynamic(() => import('./HeaderCart'))
const Sidebar = dynamic(() => import('./Sidebar'))

// Dynamically import footer components
const Footer1 = dynamic(() => import('./footer/Footer1'))
const Footer2 = dynamic(() => import('./footer/Footer2'))

// Dynamically import header based on style
const Header1 = dynamic(() => import('./header/Header1'))
const Header2 = dynamic(() => import('./header/Header2'))
const Header3 = dynamic(() => import('./header/Header3'))
const Header4 = dynamic(() => import('./header/Header4'))
const Header5 = dynamic(() => import('./header/Header5'))

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

    // CartSidebar
    const [isCartSidebar, setCartSidebar] = useState(false)
    const handleCartSidebar = () => setCartSidebar(!isCartSidebar)

    useEffect(() => {
        // Lazy load WOW.js only on client side
        if (typeof window !== 'undefined') {
            import('wowjs').then((WOW) => {
                new WOW.WOW({
                    live: false
                }).init()
            })
        }

        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        }

        document.addEventListener("scroll", handleScroll)
        return () => document.removeEventListener("scroll", handleScroll)
    }, [scroll])
    return (
        <>
            {/* <PageHead headTitle={headTitle} /> */}
            <DataBg />
            {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} /> : null}
            {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} /> : null}
            {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} /> : null}
            {headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} /> : null}
            {headerStyle == 5 ? <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} /> : null}
            <Sidebar isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
            <HeaderCart isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <main>
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}
            </main>

            {!footerStyle && < Footer1 />}
            {footerStyle == 1 ? < Footer1 /> : null}
            {footerStyle == 2 ? < Footer2 /> : null}

            <BackToTop />
        </>
    )
}
