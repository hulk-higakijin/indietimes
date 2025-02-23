import React, { FC } from 'react'
import Avatar from '@/components/Avatar/Avatar'
import { PostDataType } from '@/data/types'
import Link from 'next/link'
import { format } from 'date-fns'

export interface PostCardMetaProps {
	created_at?: string
	className?: string
	hiddenAvatar?: boolean
	avatarSize?: string
}

const ArticleCardMeta: FC<PostCardMetaProps> = ({
	created_at,
	className = 'leading-none text-xs',
	hiddenAvatar = false,
	avatarSize = 'h-7 w-7 text-sm',
}) => {
	return (
		<div
			className={`nc-PostCardMeta inline-flex flex-wrap items-center text-neutral-800 dark:text-neutral-200 ${className}`}
		>
			<Link
				href={`/`}
				className="relative flex items-center space-x-2 rtl:space-x-reverse"
			>
				{!hiddenAvatar && (
					<Avatar
						radius="rounded-full"
						sizeClass={avatarSize}
						imgUrl={
							'https://pbs.twimg.com/profile_images/1817166485867106304/v-335And_400x400.jpg'
						}
						userName={'higakijin'}
					/>
				)}
				<span className="block font-medium text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white">
					higakijin
				</span>
			</Link>
			<>
				<span className="mx-[6px] font-medium text-neutral-500 dark:text-neutral-400">
					·
				</span>
				<span className="font-normal text-neutral-500 dark:text-neutral-400">
					{created_at && format(new Date(created_at), 'MMMM dd, yyyy')}
				</span>
			</>
		</div>
	)
}

export default ArticleCardMeta
