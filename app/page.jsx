import {news,board,documents} from '../data/content'
import {ContactForm} from '../components/ContactForm'

const facebook='https://www.facebook.com/groups/ravnsbjerg'
const heart='/images/hjertestarter.webp'
const lunden1='/images/lunden-1.webp'
const lunden2='/images/lunden-2.webp'

export default function Home(){return <main>
<section className="hero"><div className="wrap heroGrid"><div><p className="eyebrow">Grundejerforeningen · Gjellerup</p><h1>Ravnsbjerg</h1><p className="lead">Her finder du det, der er godt at kunne finde igen: vedtægter, referater, Lunden, hjertestarter og kontakt til bestyrelsen.</p><p className="heroFacebook">Små nyheder, arrangementer og det, der sker her og nu, ligger i <a href={facebook}>vores Facebook-gruppe →</a></p></div><div className="visual photoHero"><img src={lunden2} width="450" height="338" alt="Lunden ved Ravnsbjerg" fetchPriority="high"/></div></div></section>

<section className="quick"><div className="wrap quickGrid"><a href="#hjertestarter"><b>♥</b><span><strong>Hjertestarter</strong><small>Ravnsbjerg Krat 2</small></span><i>→</i></a><a href="/vedtaegter"><b>§</b><span><strong>Vedtægter</strong><small>Gældende ordlyd</small></span><i>→</i></a><a href="/generalforsamling"><b>◎</b><span><strong>Generalforsamling</strong><small>Frister og referater</small></span><i>→</i></a><a href="#kontakt"><b>✉</b><span><strong>Kontakt</strong><small>Skriv til bestyrelsen</small></span><i>→</i></a></div></section>

<section id="nyheder" className="section"><div className="wrap"><div className="sectionHead"><div><p className="eyebrow">Nyt</p><h2>Fra Ravnsbjerg</h2></div><p>De større nyheder, der er værd at kunne finde igen.</p></div><div className="newsGrid">{news.map((n,i)=><article className={i===0?'card featured':'card'} key={n.title}><span className="meta">{n.category}{n.date&&<> · {n.date}</>}</span><h3>{n.title}</h3><p>{n.body}</p>{n.href&&<a className="textLink" href={n.href}>{n.link}</a>}</article>)}</div></div></section>

<section id="lunden" className="section soft"><div className="wrap split"><div className="lundenGallery"><img src={lunden2} width="450" height="338" alt="Lunden ved Ravnsbjerg" loading="lazy"/><img src={lunden1} width="338" height="450" alt="Lunden ved Ravnsbjerg" loading="lazy"/></div><div><p className="eyebrow">Fælles område</p><h2>Lunden</h2><p className="leadSmall">Lunden er foreningens grønne område. Som medlem får du en nøgle og kan blandt andet aflevere haveaffald.</p><h3>Når du afleverer haveaffald</h3><ul><li>Læg det så langt oppe til venstre som muligt.</li><li>Skub det ind over det, der allerede ligger.</li><li>Kun haveaffald.</li><li>Tag sække og poser med hjem.</li></ul><p>Hvis vi får pakket bunken godt, skal den ikke skubbes sammen så tit. Det sparer foreningen for udgifter.</p><h3>Lunden siden 1986</h3><p>Grundejerforeningen købte Lunden i 1986. Hvis du vil se de gamle papirer, ligger andelsbevis og skøde her.</p><div className="docLinks"><a href={documents[1].href}>Andelsbevis · PDF →</a><a href={documents[2].href}>Skøde · PDF →</a></div></div></div></section>

<section id="hjertestarter" className="section cream"><div className="wrap areaFeature"><div><p className="eyebrow">Praktisk</p><h2>Hjertestarter</h2><p className="leadSmall">Foreningens hjertestarter hænger på Ravnsbjerg Krat 2.</p><p>Den sidder bag den markerede dør til redskabsrummet i carporten til højre. Indgangen til Krat 2 er fra Ravnsbjergvej.</p></div><div className="areaHeroPhoto heartPhoto"><img src={heart} width="800" height="418" alt="Foreningens hjertestarter på Ravnsbjerg Krat 2" loading="lazy"/></div></div></section>

<section id="bestyrelsen" className="section"><div className="wrap"><div className="sectionHead"><div><p className="eyebrow">Kontakt</p><h2>Bestyrelsen</h2></div><p>Den nuværende bestyrelse efter generalforsamlingen 11. marts 2026.</p></div><div className="boardGrid">{board.map(m=><article key={m.name}><span>{m.role}</span><h3>{m.name}</h3><p>{m.address}</p>{m.phone&&<a href={'tel:+45'+m.phone.replaceAll(' ','')}>{m.phone}</a>}</article>)}</div></div></section>

<section id="kontakt" className="contact"><div className="wrap contactGrid"><div><p className="eyebrow light">Kontakt</p><h2>Skriv til bestyrelsen</h2><p>Spørgsmål, forslag eller noget fra området, vi bør kende til? Send en besked.</p><p className="contactAlt">Hvis formularen driller, kan du også skrive i <a href={facebook}>Facebook-gruppen</a>.</p></div><ContactForm/></div></section>
</main>}
