import './globals.css'
import './review.css'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'

export const metadata={
  title:'Grundejerforeningen Ravnsbjerg',
  description:'Nyt fra Ravnsbjerg, Lunden, vedtægter, bestyrelse og information om området.',
  metadataBase:new URL('https://ravnsbjerg.info')
}

export default function RootLayout({children}){
  return <html lang="da"><body><Header/>{children}<Footer/></body></html>
}
