'use client'
import {useEffect,useRef,useState} from 'react'

const spots=[
  {id:'ravnsbjerg',name:'Ravnsbjerg',detail:'Kvarteret',description:'Grundejerforeningens område.',lat:56.14265361,lng:9.04489274},
  {id:'lunden',name:'Lunden',detail:'Fælles område',description:'Foreningens grønne område med adgang for medlemmer.',lat:56.14045,lng:9.0417},
  {id:'enge',name:'Gjellerup Enge',detail:'144 ha natur',description:'Natur, stier, vand og græssende dyr lige ved Ravnsbjerg.',lat:56.139613,lng:9.047397},
  {id:'skole',name:'Lindbjergskolen',detail:'Skole og bibliotek',description:'Folkeskole fra 0.-9. klasse på Frølundvej 39.',lat:56.1381493,lng:9.06442041},
  {id:'halln',name:"Hall’n",detail:'Sport og fritid',description:'Det lokale idræts- og samlingssted ved skolen.',lat:56.13759,lng:9.06331},
  {id:'indkoeb',name:'Dagligvarer',detail:'Nærmeste indkøb',description:'REMA 1000 på Klokkekildevej; der er flere muligheder i Hammerum.',lat:56.14718,lng:9.04448}
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
    if(existing){
      if(window.L){resolve(window.L);return}
      existing.addEventListener('load',()=>window.L?resolve(window.L):reject(new Error('Leaflet blev ikke indlæst')),{once:true})
      existing.addEventListener('error',reject,{once:true})
      return
    }
    const script=document.createElement('script')
    script.id='leaflet-js'
    script.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.onload=()=>window.L?resolve(window.L):reject(new Error('Leaflet blev ikke indlæst'))
    script.onerror=reject
    document.body.appendChild(script)
  })
}

export function LocalMap(){
  const el=useRef(null)
  const map=useRef(null)
  const markers=useRef({})
  const [status,setStatus]=useState('loading')

  useEffect(()=>{
    let alive=true
    loadLeaflet().then(L=>{
      if(!alive||!el.current||map.current)return
      map.current=L.map(el.current,{scrollWheelZoom:false}).setView([56.142,9.052],14)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap-bidragsydere'}).addTo(map.current)
      spots.forEach(s=>{
        markers.current[s.id]=L.marker([s.lat,s.lng]).addTo(map.current).bindPopup(`<strong>${s.name}</strong><br>${s.description}`)
      })
      setStatus('ready')
    }).catch(()=>{if(alive)setStatus('error')})
    return()=>{alive=false;if(map.current){map.current.remove();map.current=null;markers.current={}}}
  },[])

  const show=(s)=>{
    if(status!=='ready'||!map.current||!markers.current[s.id])return
    map.current.setView([s.lat,s.lng],16,{animate:true})
    markers.current[s.id].openPopup()
  }

  return <div className="localMapBlock">
    <div className="mapFrame localMap" ref={el} role="region" aria-label="Kort over Ravnsbjerg og steder i nærheden">
      {status==='loading'&&<p className="mapStatus" role="status">Henter kort…</p>}
      {status==='error'&&<div className="mapStatus mapError" role="alert"><strong>Kortet kunne ikke indlæses.</strong><a href="https://www.google.com/maps/search/?api=1&query=Ravnsbjerg+Krat,+7400+Herning">Åbn området i Google Maps →</a></div>}
      <noscript><p className="mapStatus">Kortet kræver JavaScript. <a href="https://www.google.com/maps/search/?api=1&query=Ravnsbjerg+Krat,+7400+Herning">Åbn området i Google Maps →</a></p></noscript>
    </div>
    <div className="mapPlaceButtons" aria-label="Steder på kortet">{spots.map(s=><button type="button" key={s.id} disabled={status!=='ready'} onClick={()=>show(s)}><small>{s.detail}</small><strong>{s.name}</strong><span>{s.description}</span></button>)}</div>
    <p className="smallNote">Markeringen af Lunden viser området omtrentligt. Det er ikke en matrikelgrænse.</p>
  </div>
}
