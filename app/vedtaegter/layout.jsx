import {BylawsTools} from '../../components/BylawsTools'

const title='Vedtægter | Grundejerforeningen Ravnsbjerg'
const description='Gældende vedtægter for Grundejerforeningen Ravnsbjerg.'
export const metadata={title,description,openGraph:{title,description,url:'/vedtaegter'}}

export default function VedtaegterLayout({children}){return <><BylawsTools/>{children}</>}
