import React, { FC } from 'react'
import PostCardMeta from '@/components/PostCardMeta/PostCardMeta'
import PostCardSaveAction from '@/components/PostCardSaveAction/PostCardSaveAction'
import { PostDataType } from '@/data/types'
import PostCardLikeAndComment from '@/components/PostCardLikeAndComment/PostCardLikeAndComment'
import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList'
import PostTypeFeaturedIcon from '@/components/PostTypeFeaturedIcon/PostTypeFeaturedIcon'
import Link from 'next/link'
import Image from 'next/image'
import { Article } from '@/controllers/article'
import { NO_IMAGE_AVAILABLE } from '@/utils/photo'

export interface Card6Props {
	className?: string
	article: Article
}

const Card6: FC<Card6Props> = ({ className = 'h-full', article }) => {
	const { id, title, content, summary, thumbnail_url } = article

	return (
		<div
			className={`nc-Card6 group relative flex flex-row items-center border-neutral-200 dark:border-neutral-700 sm:rounded-3xl sm:border sm:bg-white sm:p-4 sm:dark:bg-neutral-900 ${className}`}
		>
			<Link href={`/articles/${id}`} className="absolute inset-0 z-0"></Link>
			<div className="flex flex-grow flex-col">
				<div className="mb-4 space-y-3">
					{/* <CategoryBadgeList categories={categories} /> */}
					<h2 className={`block text-sm font-semibold sm:text-base`}>
						<Link
							href={`/articles/${id}`}
							className="line-clamp-2"
							title={title}
						>
							{title}
						</Link>
					</h2>
					<PostCardMeta />
				</div>
				<div className="mt-auto flex flex-wrap items-center justify-between">
					{/* <PostCardLikeAndComment className="relative" /> */}
					{/* <PostCardSaveAction className="relative" readingTime={readingTime} /> */}
				</div>
			</div>

			<Link
				href={`/articles/${id}`}
				className={`relative z-0 ms-3 block h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl sm:ms-5 sm:h-full sm:w-40`}
			>
				<Image
					sizes="(max-width: 600px) 180px, 400px"
					className="h-full w-full object-cover"
					fill
					src={
						thumbnail_url || NO_IMAGE_AVAILABLE
					}
					alt={title}
				/>
				<span className="absolute bottom-1 start-1">
					{/* <PostTypeFeaturedIcon */}
					{/*   wrapSize="h-7 w-7" */}
					{/*   iconSize="h-4 w-4" */}
					{/*   postType={postType} */}
					{/* /> */}
				</span>
			</Link>
		</div>
	)
}

export default Card6
