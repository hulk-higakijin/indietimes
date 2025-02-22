import { API_BASE_URL } from '@/utils/api'
import z from 'zod'
import ky from 'ky'

export const signupScheme = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
})

export const handleSignup = async (data: typeof signupScheme) => {
	try {
	 	const response = await ky
			.post(`${API_BASE_URL}/auth/register`, {
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.json()

		console.log(response) // Handle successful registration here
	} catch (error) {
		console.error('Error during registration:', error)
	}
}
