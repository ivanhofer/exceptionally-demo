import db from "$db";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";

export const load = (async () => {
  const result = await db.posts.getAll();
  if (result.isException) {
    throw error(500);
  }

  return { posts: result() };
}) satisfies PageServerLoad;
