import db from "$db";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";

export const load = (async ({ params }) => {
  const [[post], [comments]] = await Promise.all([
    db.posts.getById(params.id),
    db.comments.getFromPost(params.id),
  ]);
  if (!post || !comments) {
    throw error(500);
  }

  return { post, comments };
}) satisfies PageServerLoad;
