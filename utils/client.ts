import sanityClient from '@sanity/client';

// we use the client to connect to Sanity
export const client = sanityClient({
	projectId: 'tfxwkkxs',
	dataset: 'production',
	apiVersion: '2022-03-10',
	useCdn: false,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});
