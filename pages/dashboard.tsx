import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';

const Dashboard = () => {
	const { user, logOut } = useAuth();
	const router = useRouter();
	return (
		<ProtectedRoute>
			<div className="flex py-2 container mx-auto min-h-screen items-center">
				<div className="text-gray-600 px-12 py-24 mt-24 overflow-y-hidden mx-auto">
					<h2 className="text-2xl font-semibold mb-4">
						You are logged in!
					</h2>

					<div className="flex justify-center items-center mb-8">
						<button
							onClick={() => {
								logOut();
								router.push('/');
							}}
							className="bg-green-600 hover:bg-green-700 px-10 py-3 rounded-md shadow-sm text-white"
						>
							Logout
						</button>
					</div>
				</div>
			</div>
		</ProtectedRoute>
	);
};

export default Dashboard;
