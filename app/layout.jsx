import './globals.css'
import './review.css'
import './ux.css'
import './home.css'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import {Analytics} from '@vercel/analytics/next'

export const metadata={
  title:'Grundejerforeningen Ravnsbjerg',
  description:'Vedtægter, referater, Lunden, bestyrelsen og praktisk information om Ravnsbjerg i Gjellerup.',
  metadataBase:new URL('https://www.ravnsbjerg.info'),
  openGraph:{
    title:'Grundejerforeningen Ravnsbjerg',
    description:'Vedtægter, referater, Lunden, bestyrelsen og praktisk information om Ravnsbjerg i Gjellerup.',
    url:'https://www.ravnsbjerg.info',
    siteName:'Grundejerforeningen Ravnsbjerg',
    locale:'da_DK',
    type:'website'
  }
}

export default function RootLayout({children}){
  return <html lang="da"><body><a className="skipLink" href="#main-content">Spring til indhold</a><Header/><div id="main-content" tabIndex="-1">{children}</div><Footer/><Analytics/></body></html>
}
