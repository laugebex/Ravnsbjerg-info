import c0 from '../../../data/referat2026/chunk0'
import c1 from '../../../data/referat2026/chunk1'
import c2 from '../../../data/referat2026/chunk2'
import c3 from '../../../data/referat2026/chunk3'
import c4 from '../../../data/referat2026/chunk4'
import c5 from '../../../data/referat2026/chunk5'
import c6 from '../../../data/referat2026/chunk6'

export const runtime='nodejs'

export function GET(){
  const pdf=Buffer.from(c0+c1+c2+c3+c4+c5+c6,'base64')
  return new Response(pdf,{headers:{
    'Content-Type':'application/pdf',
    'Content-Disposition':'inline; filename="referat-generalforsamling-2026.pdf"',
    'Cache-Control':'public, max-age=31536000, immutable'
  }})
}
