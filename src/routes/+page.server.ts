import db from "$db";
import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";
import { NetworkException } from "$utils";
import { guardExceptionsHandled, guardSuccess } from "exceptionally/assert";

export const load = (async ({ url }) => {
  const result = await db.posts.count();
  if (result.isException) {
    const exception = result();
    if (exception instanceof NetworkException) {
      // retry after 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw redirect(301, url.toString());
      // ! don't use this in production; this code produces and endless loop
    }

    if (exception instanceof Error) {
      throw error(500);
    }

    // see if we have handled all exceptions
    return guardExceptionsHandled(exception);
  }

  // see if we are dealing with a `success`
  guardSuccess(result);

  return { nrOfPosts: result() };
}) satisfies PageServerLoad;
