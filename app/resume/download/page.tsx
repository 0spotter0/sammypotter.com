'use server'

import { redirect } from 'next/navigation'

export default async function DownloadResume() {
  return redirect('/Resume_SamuelPotter_2024.pdf')
}
