const matchesSchema = (data: unknown) => !!data;

export const typedJsonFetch = async <Data>(
  ...args: Parameters<typeof fetch>
) => {
  const response = await fetch(...args).catch((e) => {
    console.error(e);
    throw new Error(`Network error`);
  });

  if (!response.ok) {
    // non 200 status codes
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json().catch((e) => {
    console.error(e);
    throw new Error(`Invalid JSON`);
  });

  if (!matchesSchema(data)) {
    // usually you would do some kind of data validation here (e.g. using `zod`)
    throw new Error(`Data does not match expected schema`);
  }

  return data as Data;
};
