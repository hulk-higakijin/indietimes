import { API_BASE_URL } from '@/utils/api'
import ky from 'ky'
import z from 'zod'

export const loginScheme = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
})

export type LoginResponse = {
  token: string,
  pid: string,
  name: string,
  isVefified: boolean,
}

export const handleLogin = async (data: typeof loginScheme) => {
	try {
		const response = await ky
			.post<LoginResponse>(`${API_BASE_URL}/auth/login`, {
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.json()

    localStorage.setItem('token', response.token)
    localStorage.setItem('pid', response.pid)

    if (localStorage.getItem('token') && localStorage.getItem('pid')) {
      window.location.href = '/'
    }

	} catch (error) {
		console.error('Error during registration:', error)
	}
}
