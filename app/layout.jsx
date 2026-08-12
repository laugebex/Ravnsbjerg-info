import './globals.css'
import './review.css'
import './ux.css'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'

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
    type:'website',
    images:[{url:'/images/lunden-2.webp',width:450,height:338,alt:'Lunden ved Ravnsbjerg'}]
  }
}

export default function RootLayout({children}){
  return <html lang="da"><body><a className="skipLink" href="#main-content">Spring til indhold</a><Header/><div id="main-content">{children}</div><Footer/></body></html>
}
