'use client'

import { useState } from 'react'
import ButtonPrimary from '../Button/ButtonPrimary'
import { Controller, useForm } from 'react-hook-form'
import { articleScheme, createArticle } from '@/controllers/article'
import { zodResolver } from '@hookform/resolvers/zod'
import Label from '../Label/Label'
import MDEditor from '@uiw/react-md-editor'
import { useThemeMode } from '@/hooks/useThemeMode'
import Input from '../Input/Input'

const ArticleForm = () => {
	const [title, setTitle] = useState('')
	const [summary, setSummary] = useState('')
  const [thumbnail_url, setThumbnailUrl] = useState('')
	const [content, setContent] = useState('')
	const { isDarkMode } = useThemeMode()
	const {
		register,
		handleSubmit,
    control,
		formState: { errors, isSubmitting, isValid },
	} = useForm({
		resolver: zodResolver(articleScheme),
	})

	return (
		<form
			className="flex flex-col gap-4"
      onSubmit={handleSubmit(createArticle)}
		>
			<div className="flex w-full flex-col gap-2">
				<Label>Title</Label>
				<Input
          {...register('title')}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Title"
					className="w-full rounded-md"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<Label>Summary</Label>
				<Input
          {...register('summary')}
					value={summary}
					onChange={(e) => setSummary(e.target.value)}
					placeholder="Summary"
					className="w-full rounded-md"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<Label>Thumbnail Url</Label>
				<Input
          {...register('thumbnail_url')}
					value={thumbnail_url}
					onChange={(e) => setThumbnailUrl(e.target.value)}
					placeholder="https://example.com/hello.png"
					className="w-full rounded-md"
				/>
			</div>
			<div
				data-color-mode={isDarkMode ? 'dark' : 'light'}
				className="flex w-full flex-col gap-2 py-4"
			>
				<Label>Article</Label>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <MDEditor
              {...field}
              value={content}
              minHeight={500}
              onChange={(value) => {
                setContent(value || '')
                field.onChange(value)
              }}
              height={1000}
            />
          )}
        />
			</div>
			<ButtonPrimary type="submit" className="rounded-md">
				Submit
			</ButtonPrimary>
		</form>
	)
}

export default ArticleForm
