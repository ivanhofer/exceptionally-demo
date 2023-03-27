import db from "$db";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";
import { FetchException } from "$utils";

export const load = (async ({ params }) => {
  const [postResult, commentsResult] = await Promise.all([
    db.posts.getById(params.id),
    db.comments.getFromPost(params.id),
  ]);
  if (postResult.isException || commentsResult.isException) {
    const postException = postResult();
    const commentsException = commentsResult();
    if (postException instanceof FetchException) {
      throw error(postException.code);
    }

    if (commentsException instanceof FetchException) {
      throw error(commentsException.code);
    }

    throw error(500);
  }

  return { post: postResult(), comments: commentsResult() };
}) satisfies PageServerLoad;
