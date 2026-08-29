'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useEffect,useState} from 'react'

export function Header(){
  const [open,setOpen]=useState(false)
  const pathname=usePathname()
  const isHome=pathname==='/'
  const close=()=>setOpen(false)
  const current=(key)=>{
    if(key==='area')return pathname==='/omraadet'||pathname.startsWith('/gjellerup-enge')||pathname.startsWith('/sport')||pathname.startsWith('/hammerum-pigen')
    if(key==='lunden')return pathname.startsWith('/lunden')
    if(key==='vedtaegter')return pathname.startsWith('/vedtaegter')
    if(key==='generalforsamling')return pathname.startsWith('/generalforsamling')
    return false
  }
  useEffect(()=>{setOpen(false)},[pathname])
  useEffect(()=>{
    const onKey=(e)=>{if(e.key==='Escape')setOpen(false)}
    window.addEventListener('keydown',onKey)
    return()=>window.removeEventListener('keydown',onKey)
  },[])
  return <header className={isHome?'header homeHeader':'header'}><div className="wrap nav">
    <Link href="/" className="brand" onClick={close}><span className="mark">R</span><span><strong>Ravnsbjerg</strong><small>Grundejerforeningen</small></span></Link>
    <button className="menuButton" type="button" aria-label={open?'Luk menu':'Åbn menu'} aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)}><span className="menuBars" aria-hidden="true"><i></i><i></i><i></i></span><span className="menuText">{open?'Luk':'Menu'}</span></button>
    <nav id="main-navigation" className={open?'navLinks open':'navLinks'} aria-label="Hovedmenu">
      <Link onClick={close} href="/#hjertestarter">Hjertestarter</Link>
      <Link onClick={close} href="/#kontakt">Kontakt bestyrelsen</Link>
      <Link onClick={close} href="/lunden" aria-current={current('lunden')?'page':undefined}>Lunden</Link>
      <Link onClick={close} href="/omraadet" aria-current={current('area')?'page':undefined}>Ny i Ravnsbjerg</Link>
      <Link onClick={close} href="/generalforsamling" aria-current={current('generalforsamling')?'page':undefined}>Generalforsamling</Link>
      <Link onClick={close} href="/vedtaegter" aria-current={current('vedtaegter')?'page':undefined}>Vedtægter</Link>
    </nav>
  </div></header>
}
