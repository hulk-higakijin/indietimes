'use client'

import React, { FC, useState } from 'react'
import PostCardSaveAction from '@/components/PostCardSaveAction/PostCardSaveAction'
import { PostDataType } from '@/data/types'
import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList'
import PostCardLikeAndComment from '@/components/PostCardLikeAndComment/PostCardLikeAndComment'
import PostCardMeta from '@/components/PostCardMeta/PostCardMeta'
import PostFeaturedMedia from '@/components/PostFeaturedMedia/PostFeaturedMedia'
import Link from 'next/link'

export interface Card11Props {
	className?: string
	post: PostDataType
	ratio?: string
	hiddenAuthor?: boolean
}

const Card11: FC<Card11Props> = ({
	className = 'h-full',
	post,
	hiddenAuthor = false,
	ratio = 'aspect-w-4 aspect-h-3',
}) => {
	const { title, href, categories, date } = post

	const [isHover, setIsHover] = useState(false)

	return (
		<div
			className={`nc-Card11 group relative flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 ${className}`}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			//
		>
			<div
				className={`relative z-10 block w-full flex-shrink-0 overflow-hidden rounded-t-3xl ${ratio}`}
			>
				<div>
					<PostFeaturedMedia post={post} isHover={isHover} />
				</div>
			</div>
			<Link href={href} className="absolute inset-0"></Link>
			<span className="absolute inset-x-3 top-3 z-10">
				<CategoryBadgeList categories={categories} />
			</span>

			<div className="flex flex-col space-y-3 p-4">
				{!hiddenAuthor ? (
					<>{/* <PostCardMeta meta={post} /> */}</>
				) : (
					<span className="text-xs text-neutral-500">{date}</span>
				)}
				<h3 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
					<span className="line-clamp-2" title={title}>
						{title}
					</span>
				</h3>
				<div className="mt-auto flex items-end justify-between">
					<PostCardLikeAndComment className="relative" />
					<PostCardSaveAction className="relative" />
				</div>
			</div>
		</div>
	)
}

export default Card11
