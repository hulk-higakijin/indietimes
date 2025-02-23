'use client'

import { useState } from 'react'
import ArticleEditor from '../ArticleEditor/ArticleEditor'
import ArticleFormTitle from './ArticleFormTitlte'
import ArticleFormSummary from './ArticleFormSummary'
import ButtonPrimary from '../Button/ButtonPrimary'

const ArticleForm = () => {
	const [title, setTitle] = useState('')
	const [summary, setSummary] = useState('')
	const [value, setValue] = useState('')

	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-2">
				<ArticleFormTitle title={title} setTitle={setTitle} />
			</div>
			<ArticleFormSummary summary={summary} setSummary={setSummary} />
			<ArticleEditor value={value} setValue={setValue} />
			<ButtonPrimary type="submit" className="rounded-md">
				Submit
			</ButtonPrimary>
		</div>
	)
}

export default ArticleForm
