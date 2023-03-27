const matchesSchema = (data: unknown) => !!data;

type Response<Data, Exception> = [Data, undefined] | [undefined, Exception];

export const typedJsonFetch = async <Data>(
  ...args: Parameters<typeof fetch>
): Promise<Response<Data, Error>> => {
  const response = await fetch(...args).catch((e) => {
    console.error(e);
    return undefined;
  });

  if (!response) {
    return [undefined, new Error(`Network error`)];
  }

  if (!response.ok) {
    // non 200 status codes
    return [undefined, new Error(`HTTP error! status: ${response.status}`)];
  }

  const data = await response.json().catch((e) => {
    console.error(e);
    return undefined;
  });

  if (!data) {
    return [undefined, new Error(`Invalid JSON`)];
  }

  if (!matchesSchema(data)) {
    // usually you would do some kind of data validation here (e.g. using `zod`)
    return [undefined, new Error(`Data does not match expected schema`)];
  }

  return [data, undefined];
};
