'use server'

import { redirect } from 'next/navigation'

export default async function DownloadResume() {
  return redirect('/SamuelPotter.pdf')
}
