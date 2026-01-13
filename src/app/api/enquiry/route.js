import { supabase } from '@/supabase/client'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const body = await req.json()

  const { error } = await supabase.from('enquiries').insert([body])

  if (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
