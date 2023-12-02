import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	console.log('currentTime invoked');

	return json({
		currentTime: Date.now()
	});
};

export const prerender = true;
