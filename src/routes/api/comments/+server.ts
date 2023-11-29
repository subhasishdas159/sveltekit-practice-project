import { json, type RequestHandler } from '@sveltejs/kit';
import { comments } from '$lib/comments';

export const GET: RequestHandler = () => {
	return json(comments);
};

export const POST: RequestHandler = async (event) => {
	const { request } = event;
	const { text } = await request.json();

	const newComment = {
		id: String(Number(comments.length) + 1),
		text
	};

	comments.push(newComment);

	return json(
		{
			id: newComment.id
		},
		{ status: 201 }
	);
};
