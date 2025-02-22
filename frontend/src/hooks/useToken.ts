import { useEffect, useState } from 'react'

export const useToken = () => {
	const [token, setToken] = useState<string | null>(null)
	const [pid, setPid] = useState<string | null>(null)

	useEffect(() => {
		setToken(localStorage.getItem('token'))
		setPid(localStorage.getItem('pid'))
	}, [])

	return { token, pid }
}
