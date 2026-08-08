import './globals.css'; import {Header} from '../components/Header'; import {Footer} from '../components/Footer';
export const metadata={title:'Grundejerforeningen Ravnsbjerg',description:'Nyheder, Lunden, vedtægter, generalforsamling og bestyrelsen i Grundejerforeningen Ravnsbjerg.',metadataBase:new URL('https://ravnsbjerg.info')}
export default function RootLayout({children}){return <html lang="da"><body><Header/>{children}<Footer/></body></html>}
