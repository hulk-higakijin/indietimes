'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// import facebookSvg from '@/images/Facebook.svg'
// import twitterSvg from '@/images/Twitter.svg'
// import googleSvg from '@/images/Google.svg'
import Input from '@/components/Input/Input'
import ButtonPrimary from '@/components/Button/ButtonPrimary'
import NcLink from '@/components/NcLink/NcLink'
import Heading2 from '@/components/Heading/Heading2'
import { handleSignup, signupScheme } from '@/controllers/signup'

// const loginSocials = [
// 	{
// 		name: 'Continue with Facebook',
// 		href: '#',
// 		icon: facebookSvg,
// 	},
// 	{
// 		name: 'Continue with Twitter',
// 		href: '#',
// 		icon: twitterSvg,
// 	},
// 	{
// 		name: 'Continue with Google',
// 		href: '#',
// 		icon: googleSvg,
// 	},
// ]

// Define the Zod schema for form validation

const PageSignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(signupScheme),
	})

	return (
		<>
			<header className="- mx-auto mb-10 max-w-2xl text-center">
				<Heading2>Sign up</Heading2>
				<span className="mt-2 block text-sm text-neutral-700 dark:text-neutral-200 sm:text-base">
					Welcome to our blog magazine Community
				</span>
			</header>

			<div className="mx-auto max-w-md space-y-6">
				<form
					className="grid grid-cols-1 gap-6"
					onSubmit={handleSubmit(handleSignup)}
				>
					<label className="block">
						<span className="text-neutral-800 dark:text-neutral-200">Name</span>
						<Input
							type="text"
							placeholder="Your name"
							className="mt-1"
							{...register('name')}
						/>
						{errors.name && (
							<span className="text-red-500">{errors.name.message}</span>
						)}
					</label>
					<label className="block">
						<span className="text-neutral-800 dark:text-neutral-200">
							Email address
						</span>
						<Input
							type="email"
							placeholder="example@example.com"
							className="mt-1"
							{...register('email')}
						/>
						{errors.email && (
							<span className="text-red-500">{errors.email.message}</span>
						)}
					</label>
					<label className="block">
						<span className="flex items-center justify-between text-neutral-800 dark:text-neutral-200">
							Password
						</span>
						<Input
							type="password"
							className="mt-1"
							placeholder="******"
							{...register('password')}
						/>
						{errors.password && (
							<span className="text-red-500">{errors.password.message}</span>
						)}
					</label>
					<ButtonPrimary type="submit">Continue</ButtonPrimary>
				</form>

				<span className="block text-center text-neutral-700 dark:text-neutral-300">
					Already have an account? {` `}
					<NcLink href="/login">Sign in</NcLink>
				</span>
			</div>
		</>
	)
}

export default PageSignUp
