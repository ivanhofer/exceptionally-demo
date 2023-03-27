export const typedJsonFetch = <Data>(...args: Parameters<typeof fetch>) =>
  fetch(...args).then((response) => response.json() as Promise<Data>);
