import db from "$db";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";

export const load = (async () => {
  const [nrOfPosts] = await db.posts.count();
  if (!nrOfPosts) {
    throw error(500);
  }

  return { nrOfPosts };
}) satisfies PageServerLoad;
