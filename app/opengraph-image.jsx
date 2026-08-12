import {ImageResponse} from 'next/og'

export const alt='Grundejerforeningen Ravnsbjerg · Gjellerup'
export const size={width:1200,height:630}
export const contentType='image/png'

export default function OpenGraphImage(){return new ImageResponse(
  <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',padding:'76px',background:'#173c2c',color:'#f5f1e7',fontFamily:'sans-serif',position:'relative'}}>
    <div style={{position:'absolute',right:'-70px',top:'-100px',width:'520px',height:'520px',borderRadius:'50%',background:'#2d6049'}}/>
    <div style={{position:'absolute',right:'-100px',bottom:'-220px',width:'520px',height:'520px',borderRadius:'50%',background:'#d5e6a4'}}/>
    <div style={{fontSize:28,fontWeight:700,letterSpacing:'0.12em',color:'#d5e6a4',textTransform:'uppercase'}}>Grundejerforeningen · Gjellerup</div>
    <div style={{fontSize:92,fontWeight:800,marginTop:24,letterSpacing:'-0.04em'}}>Ravnsbjerg</div>
    <div style={{fontSize:34,marginTop:28,maxWidth:760,lineHeight:1.3}}>Vedtægter, referater, Lunden og lokalt overblik</div>
    <div style={{position:'absolute',left:76,bottom:48,fontSize:26,fontWeight:700,color:'#d5e6a4'}}>ravnsbjerg.info</div>
  </div>,size
)}
