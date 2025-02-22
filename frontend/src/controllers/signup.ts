import { API_BASE_URL } from '@/utils/api'
import z from 'zod'

export const signupScheme = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
})

export const handleSignup = async (data: typeof signupScheme) => {
	try {
		const response = await fetch(`${API_BASE_URL}/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		if (!response.ok) {
			throw new Error('Network response was not ok')
		}

		const result = await response.json()
		console.log(result) // Handle successful registration here
	} catch (error) {
		console.error('Error during registration:', error)
	}
}
