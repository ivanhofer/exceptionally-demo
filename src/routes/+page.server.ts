import type { PageServerLoad } from "./$types.js";
import db from "$db";

export const load = (async () => {
  const nrOfPosts = await db.posts.count();

  return { nrOfPosts };
}) satisfies PageServerLoad;
