'use client'

const paragraphs=Array.from({length:17},(_,i)=>i+1)
const Links=()=> <nav className="bylawsToc" aria-label="Vedtægternes paragraffer">{paragraphs.map(n=><a key={n} href={`#paragraf-${n}`}>§ {n}</a>)}</nav>

export function BylawsTools(){return <aside className="bylawsTools" aria-label="Genveje til vedtægterne"><div className="wrap legalWrap">
  <div className="bylawsDesktop"><div className="bylawsToolsTop"><strong>Gå til paragraf</strong><button className="printButton" type="button" onClick={()=>window.print()}>Udskriv</button></div><Links/></div>
  <details className="bylawsMobile"><summary>Gå til paragraf</summary><Links/><button className="printButton" type="button" onClick={()=>window.print()}>Udskriv vedtægterne</button></details>
</div></aside>}
