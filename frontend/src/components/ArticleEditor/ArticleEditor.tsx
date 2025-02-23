'use client'

import { useThemeMode } from '@/hooks/useThemeMode'
import MDEditor, { selectWord } from '@uiw/react-md-editor'
import Label from '../Label/Label'

const ArticleEditor = ({
	value,
	setValue,
}: {
	value: string
	setValue: (value: string) => void
}) => {
  const { isDarkMode }  = useThemeMode()

	return (
		<div data-color-mode={isDarkMode ? "dark" : "light"} className="w-full py-4 flex flex-col gap-2">
      <Label>Article</Label>
			<MDEditor
				value={value}
				minHeight={500}
				onChange={(e) => setValue(e || '')}
        height={1000}
			/>
		</div>
	)
}

export default ArticleEditor
