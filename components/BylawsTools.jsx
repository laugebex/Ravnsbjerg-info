'use client'
import {useEffect} from 'react'

const paragraphs=Array.from({length:17},(_,i)=>i+1)

export function BylawsTools(){
  useEffect(()=>{
    document.querySelectorAll('.legalSection').forEach((section,i)=>{
      section.id=`paragraf-${i+1}`
      section.style.scrollMarginTop='92px'
    })
  },[])
  return <aside className="bylawsTools" aria-label="Genveje til vedtægterne"><div className="wrap legalWrap"><div className="bylawsToolsTop"><strong>Gå til paragraf</strong><button className="printButton" type="button" onClick={()=>window.print()}>Udskriv</button></div><nav className="bylawsToc" aria-label="Vedtægternes paragraffer">{paragraphs.map(n=><a key={n} href={`#paragraf-${n}`}>§ {n}</a>)}</nav></div></aside>
}
