'use client'
import {useEffect,useRef} from 'react'

const spots=[
  {id:'ravnsbjerg',name:'Ravnsbjerg',note:'Grundejerforeningens område',detail:'Kvarteret',lat:56.14265361,lng:9.04489274},
  {id:'lunden',name:'Lunden',note:'Foreningens fælles grønne område',detail:'Fælles område',lat:56.14045,lng:9.0417},
  {id:'enge',name:'Gjellerup Enge',note:'Natur, stier og græssende dyr',detail:'144 ha natur',lat:56.139613,lng:9.047397},
  {id:'skole',name:'Lindbjergskolen',note:'Frølundvej 39',detail:'Skole og bibliotek',lat:56.1381493,lng:9.06442041},
  {id:'halln',name:"Hall’n",note:'Frølundvej 41',detail:'Sport og fritid',lat:56.13759,lng:9.06331},
  {id:'indkoeb',name:'Dagligvarer',note:'REMA 1000, Klokkekildevej 23',detail:'Nærmeste dagligvarebutik',lat:56.14718,lng:9.04448}
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
  const markers=useRef({})
  useEffect(()=>{
    let alive=true
    loadLeaflet().then(L=>{
      if(!alive||!el.current||map.current)return
      map.current=L.map(el.current,{scrollWheelZoom:false}).setView([56.142,9.052],14)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap-bidragsydere'}).addTo(map.current)
      spots.forEach(s=>{
        markers.current[s.id]=L.marker([s.lat,s.lng]).addTo(map.current).bindPopup(`<strong>${s.name}</strong><br>${s.note}`)
      })
    }).catch(()=>{})
    return()=>{alive=false;if(map.current){map.current.remove();map.current=null;markers.current={}}}
  },[])
  const show=(s)=>{
    if(!map.current||!markers.current[s.id])return
    map.current.setView([s.lat,s.lng],16,{animate:true})
    markers.current[s.id].openPopup()
  }
  return <div className="localMapBlock"><div className="mapFrame localMap" ref={el} role="region" aria-label="Kort over Ravnsbjerg og steder i nærheden"><noscript>Kortet kræver JavaScript.</noscript></div><div className="mapPlaceButtons" aria-label="Steder på kortet">{spots.map(s=><button type="button" key={s.id} onClick={()=>show(s)}><strong>{s.name}</strong><span>{s.detail}</span></button>)}</div><p className="smallNote">Markeringen af Lunden viser området omtrentligt. Det er ikke en matrikelgrænse.</p></div>
}
