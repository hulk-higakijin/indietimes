import Input from '../Input/Input'
import Label from '../Label/Label'

const ArticleFormSummary = ({
	summary,
	setSummary,
}: {
	summary: string
	setSummary: (string: string) => void
}) => {
	return (
		<div className="flex flex-col gap-2">
      <Label>Summary</Label>
			<Input
				value={summary}
				onChange={(e) => setSummary(e.target.value)}
				placeholder="Summary"
				className="w-full rounded-md"
			/>
		</div>
	)
}

export default ArticleFormSummary
