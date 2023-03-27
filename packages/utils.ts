import { exception, success } from "exceptionally";

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

export const typedJsonFetch = async <Data>(
  ...args: Parameters<typeof fetch>
) => {
  const response = await fetch(...args).catch((e) => {
    console.error(e);
    return undefined;
  });

  if (!response) {
    return exception(new NetworkException());
  }

  if (!response.ok) {
    // non 200 status codes
    return exception(new FetchException(response.status));
  }

  const data = await response.json().catch((e) => {
    console.error(e);
    return undefined;
  });

  if (!data) {
    return exception(new JsonParseException());
  }

  if (!matchesSchema(data)) {
    // usually you would do some kind of data validation here (e.g. using `zod`)
    return exception(new ValidationException());
  }

  return success(data as Data);
};
