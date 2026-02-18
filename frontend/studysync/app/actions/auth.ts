'use server'
import { cookies } from 'next/headers'
import ky from 'ky'
import { getApiBaseUrl } from "@/utils/getBaseUrl";

export async function login(identifier: string, password: string) {
    const apiUrl = getApiBaseUrl();
    const data = await ky.post(`${apiUrl}/auth/login`, {json: { identifier, password }}).json<{token: string}>();
    const cookieStore = await cookies();
    cookieStore.set('token', data.token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
}

export async function signup(email: string, username: string, password: string, tz: string) {
    const apiUrl = getApiBaseUrl();
    const data = await ky.post(`${apiUrl}/auth/login`, {json: { email, password, username, timezone: tz }}).json();

    return data;
}

