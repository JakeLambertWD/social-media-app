import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

import '../styles/globals.css';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
	const [isSSR, setIsSSR] = useState(true);

	useEffect(() => {
		setIsSSR(false);
	}, []);

	if (isSSR) return null;

	return (
		// Wrap the app in the Google OAuth Provider
		<GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
			<div className='flex flex-wrap'>
				<Navbar />
				<div className='flex gap-6 md:gap-20'>
					<div className='h-[100vh] overflow-hidden xl:hover:overflow-auto'>
						<Sidebar />
					</div>
				</div>
				<div className='flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
					<Component {...pageProps} />
				</div>
			</div>
		</GoogleOAuthProvider>
	);
}

export default MyApp;
