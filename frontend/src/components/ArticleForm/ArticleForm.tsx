'use client'

import { useState } from 'react'
import ArticleEditor from '../ArticleEditor/ArticleEditor'
import ArticlePreview from '../ArticlePreview/ArticlePreview'

const ArticleForm = () => {
	const [html, setHtml] = useState('')
	return (
		<div className="flex gap-2">
			<ArticleEditor html={html} setHtml={setHtml} />
      <ArticlePreview html={html} />
		</div>
	)
}

export default ArticleForm
