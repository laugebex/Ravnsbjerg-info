'use client'

import {useState} from 'react'

const action='https://formsubmit.co/laugebex@proton.me'

export function ContactForm(){
  const [status,setStatus]=useState('idle')
  const [error,setError]=useState('')

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('sending')
    setError('')
    const form=e.currentTarget
    const formData=new FormData(form)

    try{
      const res=await fetch('https://formsubmit.co/ajax/laugebex@proton.me',{
        method:'POST',
        headers:{'Accept':'application/json'},
        body:formData
      })
      const data=await res.json().catch(()=>({}))
      if(!res.ok || data.success===false) throw new Error(data.message||'Kunne ikke sende beskeden.')
      form.reset()
      setStatus('sent')
    }catch(err){
      setError('Det lykkedes ikke at sende beskeden. Prøv igen om lidt.')
      setStatus('error')
    }
  }

  if(status==='sent') return <div className="contactSuccess" role="status"><strong>Tak. Beskeden er sendt.</strong><p>Vi vender tilbage, når vi kan.</p><button type="button" onClick={()=>setStatus('idle')}>Send en ny besked</button></div>

  return <form className="contactForm" action={action} method="POST" onSubmit={handleSubmit}>
    <input type="hidden" name="_subject" value="Ny besked fra ravnsbjerg.info"/>
    <input type="hidden" name="_template" value="table"/>
    <input type="hidden" name="_next" value="https://www.ravnsbjerg.info/#kontakt"/>
    <input type="text" name="_honey" className="honey" tabIndex="-1" autoComplete="off"/>
    <label>Navn<input type="text" name="name" autoComplete="name" required/></label>
    <label>E-mail<input type="email" name="email" autoComplete="email" required/></label>
    <label>Besked<textarea name="message" rows="6" required/></label>
    <button type="submit" disabled={status==='sending'}>{status==='sending'?'Sender…':'Send besked'}</button>
    {status==='error'&&<p className="formError" role="alert">{error}</p>}
    <small>Skriv ikke CPR-numre eller andre følsomme oplysninger i formularen.</small>
  </form>
}
