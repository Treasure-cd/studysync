'use server'

import { cookies } from 'next/headers'
import ky, { HTTPError } from 'ky'
import { getApiBaseUrl } from '@/utils/getBaseUrl'
import { User } from '../types/userType'

export async function getMe() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  if (!token) {
    return null
  }

  try {
    const apiUrl = getApiBaseUrl()

    const res: User = await ky.get(`${apiUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).json()

    return res

  } catch (err) {
    if (err instanceof HTTPError) {
      if (err.response.status === 401) {
        return null
      }
    }

    throw new Error("Failed to fetch user")
  }
}