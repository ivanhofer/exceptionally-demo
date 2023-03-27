import { typedJsonFetch } from "$utils";

type EmailString = `${string}@${string}.${string}`;

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: EmailString;
  body: string;
};

const getFromPost = async (postId: string) => {
  return typedJsonFetch<Comment[]>(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
};

export const comments = {
  getFromPost,
};
