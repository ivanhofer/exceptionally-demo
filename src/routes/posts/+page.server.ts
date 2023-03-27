import db from "$db";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";

export const load = (async () => {
  const [posts] = await db.posts.getAll();
  if (!posts) {
    throw error(500);
  }

  return { posts };
}) satisfies PageServerLoad;
