'use server'
import { cookies } from 'next/headers'
import { getApiBaseUrl } from '@/utils/getBaseUrl';

export async function getMe() {
const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const apiUrl = getApiBaseUrl();
  
  const res = await fetch(`${apiUrl}/users/me`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  return res.json();
}