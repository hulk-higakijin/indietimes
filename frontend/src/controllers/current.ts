import { API_BASE_URL } from '@/utils/api'
import ky from 'ky'

export type CurrentResponse = {
	pid: string
	name: string
	email: string
}

