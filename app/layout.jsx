import './globals.css'
import './review.css'
import './ux.css'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'

export const metadata={
  title:'Grundejerforeningen Ravnsbjerg',
  description:'Vedtægter, referater, Lunden, bestyrelsen og praktisk information om Ravnsbjerg i Gjellerup.',
  metadataBase:new URL('https://ravnsbjerg.info')
}

export default function RootLayout({children}){
  return <html lang="da"><body><Header/>{children}<Footer/></body></html>
}
