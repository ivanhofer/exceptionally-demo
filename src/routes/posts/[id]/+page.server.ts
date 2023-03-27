import db from "$db";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";
import { FetchException } from "$utils";
import { processInParallel } from "exceptionally/utils";

export const load = (async ({ params }) => {
  const result = await processInParallel([
    db.posts.getById(params.id),
    db.comments.getFromPost(params.id),
  ]);
  if (result.isException) {
    const exceptions = result().filter(Boolean);
    const fetchException = exceptions.find(
      (exception) => exception instanceof FetchException
    ) as FetchException | undefined;
    if (fetchException) {
      throw error(fetchException.code);
    }

    throw error(500);
  }

  const [post, comments] = result();

  return { post, comments };
}) satisfies PageServerLoad;
