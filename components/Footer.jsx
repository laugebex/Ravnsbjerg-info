import Link from 'next/link'

export function Footer(){return <footer><div className="wrap footer"><div><strong>Grundejerforeningen Ravnsbjerg</strong><small>Gjellerup · Herning</small></div><nav className="footerLinks" aria-label="Links i bunden"><Link href="/omraadet">Om området</Link><Link href="/vedtaegter">Vedtægter</Link><Link href="/#bestyrelsen">Bestyrelsen</Link><Link href="/#kontakt">Kontakt</Link></nav></div></footer>}
