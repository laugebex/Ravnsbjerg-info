'use client'
import Link from 'next/link'
import {useState} from 'react'

export function Header(){
 const [open,setOpen]=useState(false)
 const close=()=>setOpen(false)
 return <header className="header"><div className="wrap nav">
  <Link href="/" className="brand" onClick={close}><span className="mark">R</span><span><strong>Ravnsbjerg</strong><small>Grundejerforeningen</small></span></Link>
  <button className="menuButton" type="button" aria-label={open?'Luk menu':'Åbn menu'} aria-expanded={open} onClick={()=>setOpen(!open)}><span></span><span></span><span></span></button>
  <nav className={open?'navLinks open':'navLinks'}><Link onClick={close} href="/#nyheder">Nyheder</Link><Link onClick={close} href="/omraadet">Om området</Link><Link onClick={close} href="/sport">Sport & fritid</Link><Link onClick={close} href="/hammerum-pigen">Lokalhistorie</Link><Link onClick={close} href="/#lunden">Lunden</Link><Link onClick={close} href="/#foreningen">Foreningen</Link><Link onClick={close} href="/#bestyrelsen">Bestyrelsen</Link><Link onClick={close} className="pill" href="/#kontakt">Kontakt</Link></nav>
 </div></header>
}
