import Input from '../Input/Input'
import Label from '@/components/Label/Label'

const ArticleFormTitle = ({
	title,
	setTitle,
}: {
	title: string
	setTitle: (string: string) => void
}) => {
	return (
		<div className="flex flex-col gap-2 w-full">
			<Label>Title</Label>
			<Input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Title"
				className="w-full rounded-md"
			/>
		</div>
	)
}

export default ArticleFormTitle
