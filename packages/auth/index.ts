import { tryCatch } from "exceptionally/utils";

type EmailString = `${string}@${string}.${string}`;

const AuthentikationSdk = {
  login: async (email: EmailString, password: string) => {
    if (Math.random() > 0.5) {
      throw Error();
    }

    return email === "test@exceptionally.dev" && password === "top_secret";
  },
  register: async (email: EmailString, password: string) => {
    if (Math.random() > 0.5) {
      throw Error();
    }

    return true;
  },
};

const auth = {
  login: (email: EmailString, password: string) =>
    tryCatch(() => AuthentikationSdk.login(email, password)),
  register: (email: EmailString, password: string) =>
    tryCatch(() => AuthentikationSdk.register(email, password)),
};

export default auth;
