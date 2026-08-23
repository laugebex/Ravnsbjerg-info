import {documents} from '../../data/content'

const lunden1='/images/lunden-1-hq.webp'
const lunden1_700='/images/lunden-1-700.webp'
const lunden2='/images/lunden-2-hq.webp'
const lunden2_700='/images/lunden-2-700.webp'
const title='Lunden | Grundejerforeningen Ravnsbjerg'
const description='Praktisk information om Lunden, Grundejerforeningen Ravnsbjergs fælles grønne område og plads til haveaffald.'
export const metadata={title,description,openGraph:{title,description,url:'/lunden'}}

export default function Lunden(){return <main>
<section className="areaHero"><div className="wrap areaHeroGrid"><div><p className="crumb"><a href="/">Forside</a><span>›</span> Lunden</p><p className="eyebrow">Fælles område</p><h1>Lunden</h1><p className="lead">Lunden er foreningens fælles grønne område. Som medlem får du en nøgle. Her kan du blandt andet aflevere haveaffald.</p></div><div className="areaHeroPhoto"><img src={lunden2_700} srcSet={`${lunden2_700} 700w, ${lunden2} 1920w`} sizes="(max-width: 900px) calc(100vw - 28px), 48vw" width="1920" height="1440" alt="Indkørslen til Lunden ved Ravnsbjerg" fetchPriority="high"/></div></div></section>

<section className="section soft"><div className="wrap areaFeature"><div><p className="eyebrow">Haveaffald</p><h2>Sådan bruger vi pladsen</h2><p>For at få mest muligt ud af pladsen og holde udgifterne nede, skal haveaffaldet lægges rigtigt.</p><ul><li>Læg det så langt oppe til venstre som muligt.</li><li>Skub det ind over det, der allerede ligger.</li><li>Kun haveaffald.</li><li>Tag sække og poser med hjem.</li></ul><p>Hvis vi får pakket bunken godt, skal den ikke skubbes sammen så tit. Det sparer foreningen for udgifter.</p></div><div className="areaHeroPhoto"><img src={lunden1_700} srcSet={`${lunden1_700} 700w, ${lunden1} 1440w`} sizes="(max-width: 900px) calc(100vw - 28px), 48vw" width="1440" height="1920" alt="Bunken til haveaffald i Lunden" loading="lazy"/></div></div></section>

<section className="section"><div className="wrap"><div className="engeIntro"><p className="eyebrow">Historie</p><h2>Lunden siden 1986</h2><p>Grundejerforeningen købte Lunden i 1986. Hvis du vil se de gamle papirer, ligger andelsbevis og skøde her.</p><div className="docLinks"><a href={documents[1].href}>Andelsbevis · PDF →</a><a href={documents[2].href}>Skøde · PDF →</a></div></div></div></section>
</main>}
