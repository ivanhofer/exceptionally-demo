export class NetworkException extends Error {
  readonly #id = "NetworkException";
}

export class FetchException extends Error {
  readonly #id = "FetchException";

  constructor(readonly code: number) {
    super();
  }
}

export class JsonParseException extends Error {
  readonly #id = "JsonParseException";
}

export class ValidationException extends Error {
  readonly #id = "ValidationException";
}

const matchesSchema = (data: unknown) => !!data;

type Result<Data, Exception> = [Data, undefined] | [undefined, Exception];

export const typedJsonFetch = async <Data>(
  ...args: Parameters<typeof fetch>
): Promise<Result<Data, Error>> => {
  const response = await fetch(...args).catch((e) => {
    console.error(e);
    return undefined;
  });

  if (!response) {
    return [undefined, new NetworkException()];
  }

  if (!response.ok) {
    // non 200 status codes
    return [undefined, new FetchException(response.status)];
  }

  const data = await response.json().catch((e) => {
    console.error(e);
    return undefined;
  });

  if (!data) {
    return [undefined, new JsonParseException()];
  }

  if (!matchesSchema(data)) {
    // usually you would do some kind of data validation here (e.g. using `zod`)
    return [undefined, new ValidationException()];
  }

  return [data, undefined];
};
