'use client'

import React, { FC } from 'react'
import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList'
import SingleTitle from './SingleTitle'
import PostMeta2 from '@/components/PostMeta2/PostMeta2'
import SingleMetaAction2 from './SingleMetaAction2'
import { DEMO_CATEGORIES } from '@/data/taxonomies'
import { Article } from '@/controllers/article'

export interface SingleHeaderProps {
  article?: Article,
	titleMainClass?: string
	hiddenDesc?: boolean
	className?: string
  authorName?: string
}

const SingleHeader: FC<SingleHeaderProps> = ({
  article,
	titleMainClass,
	className = '',
  authorName
}) => {
	return (
		<>
			<div className={`nc-SingleHeader ${className}`}>
				<div className="space-y-5">
					<CategoryBadgeList
						itemClass="!px-3"
						categories={[DEMO_CATEGORIES[1]]}
					/>
					{article?.title && <SingleTitle mainClass={titleMainClass} title={article.title} />}
					{article?.summary && (
						<span className="block pb-1 text-base text-neutral-500 dark:text-neutral-400 md:text-lg">
              {article.summary}
						</span>
					)}
					<div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
					<div className="flex flex-col justify-between space-y-5 sm:flex-row sm:items-end sm:space-x-5 sm:space-y-0 rtl:space-x-reverse">
						<PostMeta2
							size="large"
							className="flex-shrink-0 leading-none"
							hiddenCategories
							avatarRounded="rounded-full shadow-inner"
              authorName={authorName}
						/>
						<SingleMetaAction2 />
					</div>
				</div>
			</div>
		</>
	)
}

export default SingleHeader
