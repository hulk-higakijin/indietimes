import React, { FC } from 'react'
import Avatar from '@/components/Avatar/Avatar'
import { PostDataType } from '@/data/types'
import { DEMO_POSTS } from '@/data/posts'
import Link from 'next/link'
import { format } from 'date-fns'

const metaDemo: PostMeta2Props['meta'] = DEMO_POSTS[0]

export interface PostMeta2Props {
	className?: string
	meta?: Pick<PostDataType, 'date' | 'author' | 'categories' | 'readingTime'>
	hiddenCategories?: boolean
	size?: 'large' | 'normal'
	avatarRounded?: string
	authorName?: string
	author_id?: number
	created_at?: string
}

const PostMeta2: FC<PostMeta2Props> = ({
	className = 'leading-none',
	meta = metaDemo,
	hiddenCategories = false,
	size = 'normal',
	avatarRounded,
	authorName,
	author_id,
	created_at,
}) => {
	const { author, categories, readingTime } = meta
	return (
		<div
			className={`nc-PostMeta2 flex flex-wrap items-center text-left text-neutral-700 dark:text-neutral-200 ${
				size === 'normal' ? 'text-xs' : 'text-sm'
			} ${className}`}
		>
			<Link
				href={`/users/${author_id}`}
				className="flex items-center space-x-2 rtl:space-x-reverse"
			>
				<Avatar
					radius={avatarRounded}
					sizeClass={
						size === 'normal'
							? 'h-6 w-6 text-sm'
							: 'h-10 w-10 sm:h-11 sm:w-11 text-xl'
					}
					imgUrl={author.avatar}
					userName={authorName}
				/>
			</Link>
			<div className="ms-3">
				<div className="flex items-center">
					<Link href={`/users/${author_id}`} className="block font-semibold">
						{authorName}
					</Link>

					{!hiddenCategories && (
						<>
							<span className="mx-2 font-semibold">·</span>
							<div className="ms-0">
								<span className="text-xs">🏷 </span>
								{categories.map((cat, index) => (
									<Link key={cat.id} href={cat.href} className="font-semibold">
										{cat.name}
										{index < categories.length - 1 && <span>, </span>}
									</Link>
								))}
							</div>
						</>
					)}
				</div>
				<div className="mt-[6px] text-xs">
					{created_at && (
						<span className="text-neutral-700 dark:text-neutral-300">
							{format(new Date(created_at), 'MMMM dd, yyyy')}
						</span>
					)}
					<span className="mx-2 font-semibold">·</span>
					<span className="text-neutral-700 dark:text-neutral-300">
						{readingTime} min read
					</span>
				</div>
			</div>
		</div>
	)
}

export default PostMeta2
