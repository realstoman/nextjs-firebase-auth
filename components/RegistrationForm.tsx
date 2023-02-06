import { useAuth } from '@/context/AuthContext';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { PageWrapper } from './PageWrapper';

interface RegistrationType {
	email: string;
	password: string;
}

const RegistrationForm = () => {
	const [data, setData] = useState<RegistrationType>({
		email: '',
		password: '',
	});

	// Use the signUp method from the AuthContext
	const { signUp } = useAuth();
	const router = useRouter();

	const handleRegistration = async (e: any) => {
		e.preventDefault();
		try {
			await signUp(data.email, data.password);
			router.push('/dashboard');
		} catch (error: any) {
			console.log(error.message);
		}
		console.log(data);
	};

	// Destructure data from the data object
	const { ...allData } = data;

	// Disable submit button until all fields are filled in
	const canSubmit = [...Object.values(allData)].every(Boolean);

	return (
		<PageWrapper>
			<div className="flex justify-center items-center min-h-screen">
				<div className="w-full max-w-sm p-4 py-8 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 sm:py-10 md:p-8 md:py-14 dark:bg-gray-800 dark:border-gray-700">
					<form
						action=""
						onSubmit={handleRegistration}
						className="group"
					>
						<h5 className="text-2xl sm:text-3xl font-medium sm:font-semibold text-gray-900 dark:text-white text-center mb-2">
							Register
						</h5>
						<p className="text-center text-md mb-8">
							Fill in the form below to create a new account
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
									setData({
										...data,
										email: e.target.value,
									});
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
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white placeholder-gray-300 valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
								pattern=".{8,}"
								required
								onChange={(e: any) => {
									setData({
										...data,
										password: e.target.value,
									});
								}}
							/>
							<span className="mt-1 hidden text-sm text-red-400">
								Password must be at least 8 characters.{' '}
							</span>
						</div>

						<button
							type="submit"
							disabled={!canSubmit}
							className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mb-8 mt-2 disabled:bg-gradient-to-br disabled:from-gray-100 disabled:to-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed group-invalid:bg-gradient-to-br group-invalid:from-gray-100 group-invalid:to-gray-300 group-invalid:text-gray-400 group-invalid:pointer-events-none group-invalid:opacity-70"
						>
							Create account
						</button>
						<div className="text-md font-medium text-gray-500 dark:text-gray-300 flex text-center justify-center items-center">
							<NextLink
								href="/"
								className="text-gray-500 hover:text-gray-800 hover:underline dark:text-gray-200 dark:hover:text-white flex justify-between items-center w-32"
							>
								<FiChevronLeft className="text-xl" /> Login
								Instead
							</NextLink>
						</div>
					</form>
				</div>
			</div>
		</PageWrapper>
	);
};

export default RegistrationForm;
