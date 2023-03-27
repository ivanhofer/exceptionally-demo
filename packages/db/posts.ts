import { typedJsonFetch } from "$utils";

type Post = {
  id: number;
  title: string;
  body: string;
};

const count = async () => {
  return (
    await typedJsonFetch<Post[]>("https://jsonplaceholder.typicode.com/posts")
  ).length;
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
