import {LocalMap} from '../../components/LocalMap'

const facebook='https://www.facebook.com/groups/ravnsbjerg'
const enge='/images/gjellerup-enge.webp'
const engeAerial='https://naturfonden.dk/wp-content/uploads/2021/05/FOTO-Tobias-Noergaard-Pedersen-Herning-Kommune-3.jpg'
const title='Om området | Grundejerforeningen Ravnsbjerg'
const description='Et kort overblik over Ravnsbjerg, Lunden, Gjellerup Enge, skole, indkøb, Hall’n og årets faste arrangementer.'
export const metadata={title,description,openGraph:{title,description,url:'/omraadet'}}

export default function Omraadet(){return <main>
<section className="areaHero"><div className="wrap areaHeroGrid"><div><p className="eyebrow">Ravnsbjerg · Gjellerup</p><h1>Ny i Ravnsbjerg?</h1><p className="lead">Her er den korte udgave: hvor vi bor, hvad der ligger tæt på, og hvad der plejer at ske i løbet af året.</p><p className="areaIntro">Datoer, små nyheder og arrangementer kommer løbende i <a href={facebook}>den private Facebook-gruppe →</a></p></div><div className="areaHeroPhoto"><img src={enge} width="287" height="510" alt="Natur ved Gjellerup Enge" fetchPriority="high"/></div></div></section>

<section className="section"><div className="wrap"><div className="sectionHead"><div><p className="eyebrow">Kort</p><h2>Det ligger tæt på</h2></div><p>Tryk på et sted under kortet for at zoome ind og se placeringen.</p></div><LocalMap/></div></section>

<section className="section cream"><div className="wrap"><div className="sectionHead"><div><p className="eyebrow">Året i foreningen</p><h2>Det plejer at gå sådan her</h2></div><p>De præcise datoer kommer på mail og i den private Facebook-gruppe.</p></div><div className="nearbyGrid yearGrid"><article><span>Jan–mar</span><h3>Generalforsamling</h3><p>Holdes i første kvartal.</p><a className="textLink" href="/generalforsamling">Se frister og referat →</a></article><article><span>Apr–maj</span><h3>Arbejdsdag</h3><p>Typisk i april eller maj. Vi ordner praktiske ting og får en snak undervejs.</p></article><article><span>Juni</span><h3>Sankt Hans</h3><p>I juni plejer vi at mødes til Sankt Hans.</p></article><article><span>August</span><h3>KSU</h3><p>I august er der Knyt Sammen Ugen, Hammerum-Gjellerups byfest. Ravnsbjerg plejer blandt andet at stille et fodboldhold.</p><a className="textLink" href="https://knytsammen.dk/">Se KSU →</a></article></div></div></section>

<section id="gjellerup-enge" className="section soft"><div className="wrap"><div className="sectionHead"><div><p className="eyebrow">Natur lige ved siden af</p><h2>Gjellerup Enge</h2></div><p>Et stort naturprojekt mellem Gjellerup, Hammerum og Birk.</p></div><div className="areaFeature engeOverview"><div><p className="leadSmall">Gjellerup Enge er 144 hektar sammenhængende natur med enge, vådområder, stier og græssende dyr. Hammerum Bæk løber gennem den sydlige del.</p><p>Der er omkring tre kilometer stier, og ved udgangen af 2025 var der registreret 1.203 arter på iNaturalist.</p><div className="pageActions"><a className="button primary" href="/gjellerup-enge">Læs mere om Gjellerup Enge</a><a className="button secondary" href="https://naturfonden.dk/natur/gjellerup-enge/">Den Danske Naturfond</a></div></div><div className="areaPhotoWide creditedPhoto"><img src={engeAerial} alt="Luftfoto af Gjellerup Enge med Hammerum Bæk" loading="lazy"/><small className="photoCredit">Foto: Tobias Nørgaard Pedersen / Herning Kommune</small></div></div></div></section>

<section className="section"><div className="wrap"><div className="sectionHead"><div><p className="eyebrow">Lokalhistorie</p><h2>Hammerum-pigen</h2></div><p>Et usædvanligt gravfund fra romersk jernalder blev gjort få kilometer fra Ravnsbjerg.</p></div><div className="simpleLinks localLinks singleLink"><a href="/hammerum-pigen"><small>Lokalhistorie</small><h3>Læs historien om Hammerum-pigen</h3><p>Fundet ved Ny Gjellerupvej, dragten og det lange arbejde med at undersøge graven.</p></a></div></div></section>
</main>}
