const title='Hall’n | Grundejerforeningen Ravnsbjerg'
const description='Lokale sports- og fritidsmuligheder i Hall’n i Hammerum-Gjellerup.'
export const metadata={title,description,openGraph:{title,description,url:'/sport',images:['/images/ravnsbjerg-og.png']}}

const activities=['Badminton','Bordtennis','Fitness','Fodbold','Gymnastik','Håndbold','Kroket','Linedance','Motion & Kultur','Padel','Skydning','Spinning','Svømning','Tennis','Volleyball','Squash']

export default function Sport(){return <main>
<section className="areaHero"><div className="wrap areaHeroGrid"><div><p className="crumb"><a href="/omraadet">Om området</a><span>›</span> Hall’n</p><p className="eyebrow">Sport og fritid · lokalt</p><h1>Hall’n</h1><p className="lead">Det meste lokale idrætsliv i Hammerum-Gjellerup er samlet i og omkring Hall’n.</p><p className="areaIntro">Hall’n ligger på Frølundvej 41 ved Lindbjergskolen. Herfra finder du videre til de foreninger, hold og aktiviteter, der er aktuelle lige nu.</p><div className="pageActions"><a className="button primary" href="https://halln.dk/sport-fritid/">Se hold og aktiviteter</a></div></div><div className="mapFrame compactMap"><iframe title="Kort til Hall'n" src="https://www.google.com/maps?q=Fr%C3%B8lundvej+41,+7400+Herning&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div></div></section>

<section className="section"><div className="wrap"><div className="sectionHead"><div><p className="eyebrow">Hvad kan man gå til?</p><h2>Det meste er her</h2></div><p>Hold, tider og tilmelding ændrer sig, så brug Hall’ns egen side, når du vil videre.</p></div><ul className="activityGrid sportActivities" aria-label="Aktiviteter i Hall’n">{activities.map(a=><li className="activityChip" key={a}>{a}</li>)}</ul><div className="pageActions"><a className="button secondary" href="/omraadet">Tilbage til Om området</a></div></div></section>
</main>}
