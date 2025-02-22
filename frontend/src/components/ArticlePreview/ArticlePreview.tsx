'use client'
import parse from 'html-react-parser'

const ArticlePreview = ({ html }: { html: string }) => {
	const preview = parse(html)

	return (
		<div className='pt-10 hidden md:block'>
			<p>{preview}</p>
		</div>
	)
}

export default ArticlePreview
