import SingleContent from '@/app/(singles)/SingleContent'
import SingleHeader from '@/app/(singles)/SingleHeader'
import SingleRelatedPosts from '@/app/(singles)/SingleRelatedPosts'
import NcImage from '@/components/NcImage/NcImage'
import { Article } from '@/controllers/article'
import { User } from '@/controllers/user'
import { API_BASE_URL } from '@/utils/api'
import ky from 'ky'
import { useParams, useRouter } from 'next/navigation'

const ShowArticlePage = async ({
	params,
}: {
	params: Promise<{ id: string }>
}) => {
	const articleId = (await params).id
	const article = await ky
		.get<Article>(`${API_BASE_URL}/articles/${articleId}`)
		.json()
	const author = await ky
		.get<User>(`${API_BASE_URL}/users/${article.user_id}`)
		.json()

	console.log(author)

	return (
		<div className={`nc-PageSingle pt-8 lg:pt-16`}>
			<header className="container rounded-xl">
				<div className="mx-auto max-w-screen-md">
					<SingleHeader
						article={article}
						authorName={author.name}
						create_at={article.created_at}
					/>
				</div>
			</header>

			{/* FEATURED IMAGE */}
			{/* <NcImage */}
			{/* 	alt="single" */}
			{/* 	containerClassName="container my-10 sm:my-12" */}
			{/* 	className="w-full rounded-xl" */}
			{/* 	src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg" */}
			{/* 	width={1260} */}
			{/* 	height={750} */}
			{/* 	sizes="(max-width: 1024px) 100vw, 1280px" */}
			{/* /> */}

			<div className="container mt-10">
				<SingleContent content={article.content} />
			</div>

			{/* RELATED POSTS */}
			<SingleRelatedPosts />
		</div>
	)
}

export default ShowArticlePage
