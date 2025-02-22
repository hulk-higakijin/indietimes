'use client'
// import facebookSvg from "@/images/Facebook.svg";
// import twitterSvg from "@/images/Twitter.svg";
// import googleSvg from "@/images/Google.svg";
import Input from '@/components/Input/Input'
import ButtonPrimary from '@/components/Button/ButtonPrimary'
import NcLink from '@/components/NcLink/NcLink'
import Heading2 from '@/components/Heading/Heading2'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { handleLogin, loginScheme } from '@/controllers/login'
import { useEffect } from 'react'

// const loginSocials = [
//   {
//     name: "Continue with Facebook",
//     href: "#",
//     icon: facebookSvg,
//   },
//   {
//     name: "Continue with Twitter",
//     href: "#",
//     icon: twitterSvg,
//   },
//   {
//     name: "Continue with Google",
//     href: "#",
//     icon: googleSvg,
//   },
// ];

const PageLogin = ({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined }
}) => {
	const notify = () => toast('Sign up successfully! Next step is to login')

  useEffect(() => {
    if (searchParams?.from === 'signup') {
      notify()
    }
  }, [searchParams])

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
	} = useForm({
		resolver: zodResolver(loginScheme),
	})

	return (
		<>
			<header className="- mx-auto mb-14 max-w-2xl text-center">
				<Heading2>Login</Heading2>
				<span className="mt-2 block text-sm text-neutral-700 dark:text-neutral-200 sm:text-base">
					Welcome to our blog magazine Community
				</span>
			</header>

			<div className="mx-auto max-w-md space-y-6">
				<form
					className="grid grid-cols-1 gap-6"
					onSubmit={handleSubmit(handleLogin)}
				>
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
							<NcLink href="/forgot-pass" className="text-sm underline">
								Forgot password?
							</NcLink>
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
					<ButtonPrimary type="submit" disabled={!isValid || isSubmitting}>
						Continue
					</ButtonPrimary>
				</form>

				<span className="block text-center text-neutral-700 dark:text-neutral-300">
					New user? {` `}
					<NcLink href="/signup">Create an account</NcLink>
				</span>
			</div>
			<ToastContainer />
		</>
	)
}

export default PageLogin
