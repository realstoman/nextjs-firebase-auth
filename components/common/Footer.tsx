import { FiGithub } from 'react-icons/fi';

function Footer() {
	return (
		<>
			<div className="flex items-center justify-center mt-14 bg-gray-700 rounded-md px-4 shadow-sm">
				<p className="text-2xl md-text-3xl text-primary-dark dark:text-primary-light mb-5 mr-2 mt-4 text-gray-200 ">
					Github repo:
				</p>
				<a
					href="https://github.com/realstoman/nextjs-firebase-auth"
					target="__blank"
					className="text-gray-200 hover:text-white cursor-pointer"
				>
					github.com/realstoman/nextjs-firebase-auth
				</a>
			</div>
		</>
	);
}

export default Footer;
