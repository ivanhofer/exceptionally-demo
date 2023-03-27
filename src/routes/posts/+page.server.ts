import type { PageServerLoad } from "./$types.js";
import db from "$db";

export const load = (async () => {
  const posts = await db.posts.getAll();

  return { posts };
}) satisfies PageServerLoad;
