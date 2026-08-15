import c0 from '../../../data/localPhotos/hero0'
import c1 from '../../../data/localPhotos/hero1'
import c2 from '../../../data/localPhotos/hero2'
import c3 from '../../../data/localPhotos/hero3'
import c4 from '../../../data/localPhotos/hero4'
import c5 from '../../../data/localPhotos/hero5'
import c6 from '../../../data/localPhotos/hero6'
import c7 from '../../../data/localPhotos/hero7'

export const runtime='nodejs'

export async function GET(){
  const image=Buffer.from(c0+c1+c2+c3+c4+c5+c6+c7,'base64')
  return new Response(image,{
    headers:{
      'Content-Type':'image/avif',
      'Cache-Control':'public, max-age=31536000, immutable'
    }
  })
}
