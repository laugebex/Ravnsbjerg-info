'use client'
import {useEffect,useRef} from 'react'

const spots=[
  {name:'Ravnsbjerg',note:'Grundejerforeningens område',lat:56.14265361,lng:9.04489274},
  {name:'Gjellerup Enge',note:'Natur, stier og græssende dyr',lat:56.139613,lng:9.047397},
  {name:'Lindbjergskolen',note:'Frølundvej 39',lat:56.1381493,lng:9.06442041},
  {name:"Hall’n",note:'Frølundvej 41',lat:56.13759,lng:9.06331},
  {name:'REMA 1000',note:'Klokkekildevej 23',lat:56.14718,lng:9.04448}
]

function loadLeaflet(){
  if(window.L)return Promise.resolve(window.L)
  if(!document.getElementById('leaflet-css')){
    const css=document.createElement('link')
    css.id='leaflet-css'
    css.rel='stylesheet'
    css.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(css)
  }
  return new Promise((resolve,reject)=>{
    const existing=document.getElementById('leaflet-js')
    if(existing){existing.addEventListener('load',()=>resolve(window.L),{once:true});existing.addEventListener('error',reject,{once:true});return}
    const script=document.createElement('script')
    script.id='leaflet-js'
    script.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.onload=()=>resolve(window.L)
    script.onerror=reject
    document.body.appendChild(script)
  })
}

export function LocalMap(){
  const el=useRef(null)
  const map=useRef(null)
  useEffect(()=>{
    let alive=true
    loadLeaflet().then(L=>{
      if(!alive||!el.current||map.current)return
      map.current=L.map(el.current,{scrollWheelZoom:false}).setView([56.1425,9.052],14)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap-bidragsydere'}).addTo(map.current)
      spots.forEach(s=>L.marker([s.lat,s.lng]).addTo(map.current).bindPopup(`<strong>${s.name}</strong><br>${s.note}`))
    }).catch(()=>{})
    return()=>{alive=false;if(map.current){map.current.remove();map.current=null}}
  },[])
  return <div className="mapFrame localMap" ref={el} role="region" aria-label="Kort over Ravnsbjerg og steder i nærheden"><noscript>Kortet kræver JavaScript.</noscript></div>
}
