import { comments } from '$lib/comments';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = (event) => {
	const { commentId } = event.params;
	const foundComment = comments.find((item) => item.id === commentId);

	return json(foundComment);
};

export const PATCH: RequestHandler = async (event) => {
	const { request, params } = event;
	const { commentId } = params;
	const { text } = await request.json();

	const foundComment = comments.find((item) => item.id === commentId);

	if (foundComment) {
		foundComment.text = text;
	}

	return json(foundComment);
};

export const DELETE: RequestHandler = async (event) => {
	const { params } = event;
	const { commentId } = params;

	const foundIndex = comments.findIndex((item) => item.id === commentId);
	if (foundIndex === -1) {
		return json({ msg: 'comment not found' }, { status: 400 });
	}
	const itemToDelete = comments[foundIndex];

	comments.splice(foundIndex, 1);
	console.log('foundIndex', foundIndex);

	return json(itemToDelete);
};
