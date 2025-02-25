import React, { FC } from 'react'
import PostCardSaveAction from '@/components/PostCardSaveAction/PostCardSaveAction'
import { PostDataType } from '@/data/types'
import PostCardLikeAndComment from '@/components/PostCardLikeAndComment/PostCardLikeAndComment'
import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList'
import PostTypeFeaturedIcon from '@/components/PostTypeFeaturedIcon/PostTypeFeaturedIcon'
import Link from 'next/link'
import Image from 'next/image'
import PostCardMeta from '../PostCardMeta/PostCardMeta'
import { Article } from '@/controllers/article'

export interface Card2Props {
	className?: string
	article: Article
	size?: 'normal' | 'large'
}

const Card2: FC<Card2Props> = ({
	className = 'h-full',
	size = 'normal',
	article,
}) => {
	const { id, title, content, summary, created_at, thumbnail_url } = article
	console.log(created_at)

	return (
		<div className={`nc-Card2 group relative flex flex-col ${className}`}>
			<div className="relative z-0 block h-0 w-full flex-shrink-0 flex-grow pt-[75%] sm:pt-[55%]">
				<Image
					fill
					sizes="(max-width: 600px) 480px, 800px"
					className="rounded-3xl object-cover"
					src={
						thumbnail_url ||
						'https://pbs.twimg.com/media/GkbyfKHXkAAMfIK?format=jpg&name=large'
					}
					alt={title}
				/>
				{/* <PostTypeFeaturedIcon */}
				{/* 	className="absolute bottom-2 left-2" */}
				{/* 	postType={postType} */}
				{/* 	wrapSize="w-8 h-8" */}
				{/* 	iconSize="w-4 h-4" */}
				{/* /> */}
				{/* <CategoryBadgeList */}
				{/* 	className="absolute left-3 top-3 flex flex-wrap space-x-2" */}
				{/* 	itemClass="relative" */}
				{/* 	categories={categories} */}
				{/* /> */}
			</div>

			<Link href={`/articles/${id}`} className="absolute inset-0" />

			<div className="mt-5 flex flex-col px-4">
				<div className="space-y-3">
					<PostCardMeta
						created_at={created_at}
						className="relative text-sm"
						avatarSize="h-8 w-8 text-sm"
					/>

					<h2
						className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 ${
							size === 'large' ? 'text-base sm:text-lg md:text-xl' : 'text-base'
						}`}
					>
						<Link
							href={`/articles/${id}`}
							className="line-clamp-2"
							title={title}
						>
							{title}
						</Link>
					</h2>
					<span className="line-clamp-3 block text-[15px] leading-6 text-neutral-500 dark:text-neutral-400">
						{summary}
					</span>
				</div>
				<div className="my-5 border-t border-neutral-200 dark:border-neutral-700"></div>
				<div className="flex items-center justify-between"></div>
			</div>
		</div>
	)
}

export default Card2
