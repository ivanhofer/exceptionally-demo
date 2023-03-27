import db from "$db";
import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";
import { NetworkException } from "$utils";

export const load = (async ({ url }) => {
  const [nrOfPosts, exception] = await db.posts.count();
  if (exception) {
    if (exception instanceof NetworkException) {
      // retry after 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw redirect(301, url.toString());
      // ! don't use this in production; this code produces and endless loop
    }

    throw error(500);
  }

  return { nrOfPosts };
}) satisfies PageServerLoad;
