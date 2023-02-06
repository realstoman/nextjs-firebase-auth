import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
// import { FiChevronLeft } from 'react-icons/fi';
// import { useAuth } from '../../context/AuthContext';
// import { PageWrapper } from '../common/PageWrapper';

// interface LoginType {
// 	email: string;
// 	password: string;
// }

const LoginForm = () => {
	// const methods = useForm<LoginType>({ mode: 'onBlur' });
	// const [data, setData] = useState<LoginType>({
	// 	email: '',
	// 	password: '',
	// });

	// const { logIn } = useAuth();
	// const router = useRouter();

	// const handleLogin = async (e: any) => {
	// 	e.preventDefault();
	// 	try {
	// 		await logIn(data.email, data.password);
	// 		router.push('/dashboard');
	// 	} catch (error: any) {
	// 		console.log(error.message);
	// 	}
	// };

	// Destructure data from the object
	// const { ...allData } = data;

	// Disable submit button until all fields are filled in
	// const canSubmit = [...Object.values(allData)].every(Boolean);

	// React Hook Form Example
	// const onSubmit = async (data: LoginType) => {
	// 	try {
	// 		await logIn(data.email, data.password);
	// 		router.push('/dashboard');
	// 	} catch (error: any) {
	// 		console.log(error.message);
	// 	}
	// };

	return (
		// <PageWrapper
		// 	initialAnimOpacity={0}
		// 	animateAnimOpacity={1}
		// 	exitAnimOpacity={0}
		// 	initialYAxis={15}
		// 	animateYAxis={0}
		// 	exitYAxis={15}
		// 	timeDelay={0.3}
		// >
		<div className="flex justify-center items-center min-h-screen">
			<div className="w-full max-w-sm p-4 py-8 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 sm:py-10 md:p-8 md:py-14 dark:bg-gray-800 dark:border-gray-700">
				<form action="" className="group">
					<h5 className="text-2xl sm:text-3xl font-medium sm:font-semibold text-gray-900 dark:text-white text-center mb-2">
						Admin Login
					</h5>
					<p className="text-center text-gray-500 text-md mb-8">
						Please enter your admin credentials to login to the
						dashboard.
					</p>
					<div className="mb-5">
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Your email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white placeholder-gray-300 valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
							autoComplete="off"
							required
							pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
							placeholder="name@company.com"
							onChange={(e: any) => {
								// setData({
								// 	...data,
								// 	email: e.target.value,
								// });
							}}
						/>
						<span className="mt-1 hidden text-sm text-red-400">
							Please enter a valid email address.{' '}
						</span>
					</div>
					<div className="mb-5">
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Your password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="••••••••"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-none placeholder-gray-300 valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
							pattern=".{8,}"
							required
							onChange={(e: any) => {
								// setData({
								// 	...data,
								// 	password: e.target.value,
								// });
							}}
						/>
						<span className="mt-1 hidden text-sm text-red-400">
							Password must be at least 8 characters.{' '}
						</span>
					</div>
					<div className="flex items-start mb-6">
						<div className="flex items-start">
							<div className="flex items-center h-5">
								<input
									id="remember"
									type="checkbox"
									value=""
									className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
								/>
							</div>
							<label
								htmlFor="remember"
								className="ml-2 text-sm text-gray-900 dark:text-gray-300"
							>
								Remember me
							</label>
						</div>
						<NextLink
							href="/admin/forgot-password"
							className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
						>
							Forgot password?
						</NextLink>
					</div>
					<button
						type="submit"
						// disabled={!canSubmit}
						className="w-full text-white bg-primary-color hover:bg-primary-color-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mb-8 disabled:bg-gradient-to-br disabled:from-gray-100 disabled:to-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed group-invalid:bg-gradient-to-br group-invalid:from-gray-100 group-invalid:to-gray-300 group-invalid:text-gray-400 group-invalid:pointer-events-none group-invalid:opacity-70"
					>
						Login to your account
					</button>

					<div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex text-center justify-center items-center">
						<NextLink
							href="/"
							className="text-blue-700 hover:underline dark:text-blue-500 flex justify-between items-center w-28"
						>
							{/* <FiChevronLeft className="text-lg" /> Back to */}
							home
						</NextLink>
					</div>
				</form>
			</div>
		</div>
		// </PageWrapper>
	);
};

export default LoginForm;
