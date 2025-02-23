'use client'

import { useState } from 'react'
import ArticleEditor from '../ArticleEditor/ArticleEditor'
import ArticlePreview from '../ArticlePreview/ArticlePreview'

const ArticleForm = () => {
  const [value, setValue] = useState("");

	return (
		<div className="flex gap-2">
			<ArticleEditor value={value} setValue={setValue} />
		</div>
	)
}

export default ArticleForm
