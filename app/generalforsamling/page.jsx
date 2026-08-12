const title='Generalforsamling | Grundejerforeningen Ravnsbjerg'
const description='Frister, seneste referat og praktisk information om generalforsamlingen i Grundejerforeningen Ravnsbjerg.'
export const metadata={title,description,openGraph:{title,description,url:'/generalforsamling',images:['/images/ravnsbjerg-og.png']}}

export default function Generalforsamling(){return <main>
<section className="areaHero"><div className="wrap"><p className="eyebrow">Grundejerforeningen Ravnsbjerg</p><h1>Generalforsamling</h1><p className="lead">Her finder du fristerne og det seneste referat.</p></div></section>

<section className="section"><div className="wrap gfGrid"><article className="gfCard"><p className="eyebrow">Hvornår?</p><h2>Første kvartal</h2><p>Den ordinære generalforsamling holdes hvert år i første kvartal.</p><p>Indkaldelsen kommer på e-mail med mindst 14 dages varsel.</p></article><article className="gfCard"><p className="eyebrow">Har du et forslag?</p><h2>Senest en uge før</h2><p>Forslag fra medlemmer skal sendes skriftligt til bestyrelsen senest en uge før generalforsamlingen.</p><p>Forslagsstilleren skal være til stede på generalforsamlingen og motivere forslaget.</p><a className="textLink" href="/#kontakt">Skriv til bestyrelsen →</a></article></div></section>

<section className="section soft"><div className="wrap"><div className="sectionHead"><div><p className="eyebrow">Seneste referat</p><h2>11. marts 2026</h2></div><p>Referatet samler beslutninger, regnskab, kontingent, forslag og valg til bestyrelsen.</p></div><a className="button primary" href="/dokumenter/referat-generalforsamling-2026.pdf">Åbn referatet · PDF</a></div></section>
</main>}
