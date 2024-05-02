'use server'

import { cookies } from 'next/headers'

export async function toggleColorTheme() {
  const currentIsDark = cookies().get('theme')?.value === 'dark' ?? false
  cookies().set('theme', currentIsDark ? '' : 'dark')
}
