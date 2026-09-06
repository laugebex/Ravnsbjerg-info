import {documents} from '../../data/content'

const lunden1='/images/lunden-1-hq.webp'
const lunden1_700='/images/lunden-1-700.webp'
const lunden2='/images/lunden-2-hq.webp'
const lunden2_700='/images/lunden-2-700.webp'
const title='Lunden | Grundejerforeningen Ravnsbjerg'
const description='Praktisk information og retningslinjer for Lunden, Grundejerforeningen Ravnsbjergs fælles grønne område og plads til haveaffald.'
export const metadata={title,description,openGraph:{title,description,url:'/lunden'}}

export default function Lunden(){return <main>
<section className="areaHero"><div className="wrap areaHeroGrid"><div><p className="crumb"><a href="/">Forside</a><span>›</span> Lunden</p><p className="eyebrow">Fælles område</p><h1>Lunden</h1><p className="lead">Lunden er foreningens fælles grønne område. Som medlem får du en nøgle. Her kan du blandt andet aflevere haveaffald fra din parcel i Ravnsbjerg.</p></div><div className="areaHeroPhoto"><img src={lunden2_700} srcSet={`${lunden2_700} 700w, ${lunden2} 1920w`} sizes="(max-width: 900px) calc(100vw - 28px), 48vw" width="1920" height="1440" alt="Indkørslen til Lunden ved Ravnsbjerg" fetchPriority="high"/></div></div></section>

<section className="section soft"><div className="wrap areaFeature"><div><p className="eyebrow">Haveaffald</p><h2>Retningslinjer for brug af Lunden</h2><p>Lunden er et tilbud til grundejerforeningens medlemmer. For at vi kan blive ved med at have plads og økonomi til ordningen, gælder disse fælles regler:</p><ul><li>Lunden er kun til haveaffald.</li><li>Der må kun afleveres haveaffald fra medlemsparceller i Ravnsbjerg.</li><li>Nøglen må ikke lånes ud til familie, venner, naboer eller andre.</li><li>Der må ikke afleveres jord, beton, fliser eller lignende.</li><li>Der må ikke afleveres bearbejdet træ, herunder malet, trykimprægneret eller høvlet træ.</li><li>Der må ikke afleveres hegn, stolper eller lignende.</li><li>Der må ikke afleveres potter af ler, keramik, plast eller lignende.</li><li>Plastposer, sække og anden emballage skal tages med hjem.</li><li>Lunden skal altid låses, når du forlader området – også hvis du kun er væk i få minutter.</li><li>Ved fraflytning må nøglen ikke overdrages til de nye beboere. Den skal afleveres til bestyrelsen mod tilbagebetaling af depositum.</li></ul><p><strong>Når du læsser af:</strong> Kør så langt i bund – til venstre/mod øst – som det er muligt og forsvarligt, før du aflæsser. Læg affaldet så langt inde som muligt og skub det gerne ind over det, der allerede ligger.</p><p>Jo bedre vi udnytter pladsen, desto sjældnere skal bunken håndteres og skubbes sammen. Det holder foreningens udgifter nede.</p></div><div className="areaHeroPhoto"><img src={lunden1_700} srcSet={`${lunden1_700} 700w, ${lunden1} 1440w`} sizes="(max-width: 900px) calc(100vw - 28px), 48vw" width="1440" height="1920" alt="Bunken til haveaffald i Lunden" loading="lazy"/></div></div></section>

<section className="section"><div className="wrap"><div className="engeIntro"><p className="eyebrow">Historie</p><h2>Lunden siden 1986</h2><p>Grundejerforeningen købte Lunden i 1986. Hvis du vil se de gamle papirer, ligger andelsbevis og skøde her.</p><div className="docLinks"><a href={documents[1].href}>Andelsbevis · PDF →</a><a href={documents[2].href}>Skøde · PDF →</a></div></div></div></section>
</main>}
