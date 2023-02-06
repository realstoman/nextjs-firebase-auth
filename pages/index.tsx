import Head from 'next/head';
import LoginForm from '@/components/LoginForm';

export default function Home() {
	return (
		<>
			<Head>
				<title>Login - Firebase Authentication With Next.js</title>
				<meta
					name="description"
					content="Learn how to implement Google Firebase Authentication in your React, Next.js, TypeScript projects."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="px-4 m-0 bg-gradient-to-br from-primary-color to-blue-400">
				<LoginForm />
			</main>
		</>
	);
}
