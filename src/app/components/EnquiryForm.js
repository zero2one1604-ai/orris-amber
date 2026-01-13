'use client'

import { useForm } from 'react-hook-form'

export default function EnquiryForm() {
  const { register, handleSubmit } = useForm()

  const onSubmit = async data => {
    await fetch('/api/enquiry', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    alert('Enquiry sent')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('name')} placeholder="Name" />
      <input {...register('email')} placeholder="Email" />
      <button>Submit</button>
    </form>
  )
}
