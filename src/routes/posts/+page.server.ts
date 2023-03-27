import db from "$db";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";

export const load = (async () => {
  const [posts, exception] = await db.posts.getAll();
  if (exception) {
    throw error(500);
  }

  return { posts };
}) satisfies PageServerLoad;
