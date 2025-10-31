// This API route is disabled for static export
// Contact form now uses mailto instead
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Contact form uses mailto' })
}