import z from 'zod'
import ky from 'ky'
import { API_BASE_URL } from '@/utils/api'

export type Article = {
	id: number
	title: string
	summary: string
	content: string
	thumbnail_url?: string
	user_id: number
	created_at: string
	updated_at: string
}

export const articleScheme = z.object({
	title: z
		.string()
		.min(1, 'Title must be at least 1 characters long')
		.max(100, 'Title must be at most 100 characters long'),
	summary: z
		.string()
		.min(1, 'Summary must be at least 1 characters long')
		.max(100, 'Summary must be at most 100 characters long'),
	thumbnail_url: z.string().url(),
	content: z.string().min(1, 'Content must be at least 1 characters long'),
})

export const createArticle = async (data: z.infer<typeof articleScheme>) => {
	try {
		const response = await ky
			.post<z.infer<typeof articleScheme>>(`${API_BASE_URL}/articles`, {
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
			.json()

		console.log(response)

		window.location.href = '/'
	} catch (error) {
		console.error('Error during article creation:', error)
	}
}
