import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const { user } = useAuth();

	useEffect(() => {
		if (!user.uid) {
			router.push('/login');
		}
	}, [router, user]);

	return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
