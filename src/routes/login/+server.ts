import auth from "$auth";
import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types.js";

export const POST = (async ({}) => {
  const result = await auth.login(
    "ivan@exceptionally.dev",
    "my secret password"
  );

  if (result.isException) {
    throw error(400);
  }

  return json({ success: true });
}) satisfies RequestHandler;
