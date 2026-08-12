'use client'
import {useState} from 'react'

export function INaturalistEmbed(){
  const [show,setShow]=useState(false)
  if(show)return <div className="mapFrame inatFrame"><iframe title="Gjellerup Enge på iNaturalist" src="https://www.inaturalist.org/projects/gjellerup-enge?iframe=true" loading="lazy"></iframe></div>
  return <div className="inatPlaceholder"><div><p className="eyebrow">Observationer</p><h3>Vis iNaturalist her</h3><p>Kortet hentes først, når du beder om det. Det gør resten af siden hurtigere og mindre afhængig af en ekstern tjeneste.</p><button className="button primary" type="button" onClick={()=>setShow(true)}>Vis iNaturalist-kort</button></div></div>
}
