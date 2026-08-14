import {news,board,documents} from '../data/content'
import {ContactForm} from '../components/ContactForm'

const facebook='https://www.facebook.com/groups/ravnsbjerg'
const heart='/images/hjertestarter-hq.webp'
const heart700='/images/hjertestarter-700.webp'
const lunden1='/images/lunden-1-hq.webp'
const lunden1_700='/images/lunden-1-700.webp'
const lunden2='/images/lunden-2-hq.webp'
const lunden2_700='/images/lunden-2-700.webp'

export default function Home(){return <main>
<section className="hero"><div className="wrap heroGrid"><div><p className="eyebrow">Grundejerforeningen · Gjellerup</p><h1>Ravnsbjerg</h1><p className="lead">Her finder du vedtægter, referater, Lunden, hjertestarteren og kontakt til bestyrelsen.</p><p className="heroFacebook">Små nyheder, arrangementer og det, der sker her og nu, ligger i <a href={facebook}>vores private Facebook-gruppe →</a></p></div><div className="visual photoHero"><img src={lunden2_700} srcSet={`${lunden2_700} 700w, ${lunden2} 1920w`} sizes="(max-width: 900px) calc(100vw - 28px), 48vw" width="1920" height="1440" alt="Indkørslen til Lunden ved Ravnsbjerg" fetchPriority="high"/></div></div></section>

<nav className="quick" aria-label="Hurtige genveje"><div className="wrap quickGrid"><a href="#hjertestarter"><b aria-hidden="true">♥</b><span><strong>Hjertestarter</strong><small>Ravnsbjerg Krat 2</small></span><i aria-hidden="true">→</i></a><a href="/vedtaegter"><b aria-hidden="true">§</b><span><strong>Vedtægter</strong><small>Gældende ordlyd</small></span><i aria-hidden="true">→</i></a><a href="/generalforsamling"><b aria-hidden="true">◎</b><span><strong>Generalforsamling</strong><small>Frister og referater</small></span><i aria-hidden="true">→</i></a><a href="#kontakt"><b aria-hidden="true">✉</b><span><strong>Kontakt</strong><small>Skriv til bestyrelsen</small></span><i aria-hidden="true">→</i></a></div></nav>

<section id="nyheder" className="section"><div className="wrap"><div className="sectionHead"><div><p className="eyebrow">Nyt</p><h2>Fra Ravnsbjerg</h2></div><p>Her lægger vi de større nyheder, som skal være nemme at finde igen.</p></div><div className="newsGrid">{news.map((n,i)=><article className={i===0?'card featured':'card'} key={n.title}><span className="meta">{n.category}{n.date&&<> · {n.date}</>}</span><h3>{n.title}</h3><p>{n.body}</p>{n.href&&<a className="textLink" href={n.href}>{n.link}</a>}</article>)}</div></div></section>

<section id="lunden" className="section soft"><div className="wrap split"><div className="lundenGallery"><img src={lunden2_700} srcSet={`${lunden2_700} 700w, ${lunden2} 1920w`} sizes="(max-width: 900px) calc(100vw - 28px), 42vw" width="1920" height="1440" alt="Indkørslen til Lunden ved Ravnsbjerg" loading="lazy"/><img src={lunden1_700} srcSet={`${lunden1_700} 700w, ${lunden1} 1440w`} sizes="(max-width: 620px) calc(100vw - 28px), (max-width: 900px) 48vw, 21vw" width="1440" height="1920" alt="Bunken til haveaffald i Lunden" loading="lazy"/></div><div><p className="eyebrow">Fælles område</p><h2>Lunden</h2><p className="leadSmall">Lunden er foreningens fælles grønne område. Som medlem får du en nøgle. Her kan du blandt andet aflevere haveaffald.</p><h3>Retningslinjer for haveaffald</h3><ul><li>Læg det så langt oppe til venstre som muligt.</li><li>Skub det ind over det, der allerede ligger.</li><li>Kun haveaffald.</li><li>Tag sække og poser med hjem.</li></ul><p>Hvis vi får pakket bunken godt, skal den ikke skubbes sammen så tit. Det sparer foreningen for udgifter.</p><h3>Lunden siden 1986</h3><p>Grundejerforeningen købte Lunden i 1986. Hvis du vil se de gamle papirer, ligger andelsbevis og skøde her.</p><div className="docLinks"><a href={documents[1].href}>Andelsbevis · PDF →</a><a href={documents[2].href}>Skøde · PDF →</a></div></div></div></section>

<section id="hjertestarter" className="section cream"><div className="wrap areaFeature"><div><p className="eyebrow">Praktisk</p><h2>Hjertestarter</h2><p className="leadSmall">Foreningens hjertestarter hænger på Ravnsbjerg Krat 2.</p><p>Den sidder bag den markerede dør til redskabsrummet i carporten til højre. Indgangen til Krat 2 er fra Ravnsbjergvej.</p></div><div className="areaHeroPhoto heartPhoto"><img src={heart700} srcSet={`${heart700} 700w, ${heart} 1506w`} sizes="(max-width: 900px) calc(100vw - 28px), 48vw" width="1506" height="787" alt="Foreningens hjertestarter på Ravnsbjerg Krat 2" loading="lazy"/></div></div></section>

<section id="bestyrelsen" className="section"><div className="wrap"><div className="sectionHead"><div><p className="eyebrow">Kontakt</p><h2>Bestyrelsen</h2></div><p>Den nuværende bestyrelse efter generalforsamlingen 11. marts 2026.</p></div><div className="boardGrid">{board.map(m=><article key={m.name}><span>{m.role}</span><h3>{m.name}</h3><p>{m.address}</p>{m.phone&&<a href={'tel:+45'+m.phone.replaceAll(' ','')}>{m.phone}</a>}</article>)}</div></div></section>

<section id="kontakt" className="contact"><div className="wrap contactGrid"><div><p className="eyebrow light">Kontakt</p><h2>Skriv til bestyrelsen</h2><p>Spørgsmål, forslag eller noget fra området, vi bør kende til? Send en besked.</p></div><ContactForm/></div></section>
</main>}
