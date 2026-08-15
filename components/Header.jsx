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
    {!isHome&&<><button className="menuButton" type="button" aria-label={open?'Luk menu':'Åbn menu'} aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)}><span></span><span></span><span></span></button>
    <nav id="main-navigation" className={open?'navLinks open':'navLinks'} aria-label="Hovedmenu">
      <Link onClick={close} href="/omraadet" aria-current={current('area')?'page':undefined}>Om området</Link>
      <Link onClick={close} href="/#lunden">Lunden</Link>
      <Link onClick={close} href="/generalforsamling" aria-current={current('generalforsamling')?'page':undefined}>Generalforsamling</Link>
      <Link onClick={close} href="/vedtaegter" aria-current={current('vedtaegter')?'page':undefined}>Vedtægter</Link>
      <Link onClick={close} href="/#bestyrelsen">Bestyrelsen</Link>
      <Link onClick={close} className="pill" href="/#kontakt">Kontakt</Link>
    </nav></>}
  </div></header>
}
