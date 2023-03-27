import { typedJsonFetch } from "$utils";
import { success } from "exceptionally";

type Post = {
  id: number;
  title: string;
  body: string;
};

const count = async () => {
  const result = await typedJsonFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (result.isException) return result;

  return success(result().length);
};

const getAll = async () => {
  return typedJsonFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");
};

const getById = async (id: string) => {
  return typedJsonFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
};

export const posts = {
  count,
  getAll,
  getById,
};
