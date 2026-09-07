'use client'
import {useRef,useState} from 'react'

export function HeroVideo(){
  const videoRef=useRef(null)
  const [paused,setPaused]=useState(false)
  const toggle=()=>{
    const video=videoRef.current
    if(!video)return
    if(video.paused)video.play()
    else video.pause()
  }
  return <button type="button" className="heroVideoButton" onClick={toggle} aria-label={paused?'Afspil luftvideo':'Sæt luftvideo på pause'}>
    <video ref={videoRef} autoPlay muted loop playsInline preload="auto" poster="/images/hero-ravnsbjerg.avif" onPlay={()=>setPaused(false)} onPause={()=>setPaused(true)}>
      <source src="/ravnsbjerg-hero.mp4" type="video/mp4"/>
    </video>
    <span className="heroVideoState" aria-hidden="true">{paused?'▶':'Ⅱ'}</span>
  </button>
}
