'use client';
import { motion, AnimatePresence } from 'framer-motion';

export const PageWrapper = ({ children }: { children: any }) => {
	return (
		<>
			<AnimatePresence>
				<motion.div
					initial={{
						opacity: 0,
						y: 0,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					exit={{ opacity: 0, y: 0 }}
					transition={{ delay: 0.3 }}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</>
	);
};
