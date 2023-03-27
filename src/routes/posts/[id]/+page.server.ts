import type { PageServerLoad } from "./$types.js";
import db from "$db";

export const load = (async ({ params }) => {
  const [post, comments] = await Promise.all([
    db.posts.getById(params.id),
    db.comments.getFromPost(params.id),
  ]);

  return { post, comments };
}) satisfies PageServerLoad;
