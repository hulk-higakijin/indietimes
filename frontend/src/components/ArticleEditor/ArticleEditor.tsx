'use client'

import Editor from 'react-simple-wysiwyg'

const ArticleEditor = ({
	html,
	setHtml,
}: {
	html: string
	setHtml: (value: string) => void
}) => {
	const onChange = (e: any) => {
		setHtml(e.target.value)
	}

	return <Editor value={html} onChange={onChange} />
}

export default ArticleEditor
