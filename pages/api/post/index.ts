import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../utils/client';
import { allPostsQuery } from '../../../utils/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		// get query
		const query = allPostsQuery();

		// fetch data from the client
		const data = await client.fetch(query);

		// parse data to frontend
		res.status(200).json(data);
	} else if (req.method === 'POST') {
		// get doc from request
		const document = req.body;

		// create new document to add to Sanity
		client.create(document).then(() => {
			res.status(200).json('video created');
		});
	}
}
