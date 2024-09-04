import OpenAI, { ClientOptions } from "openai";
import "dotenv/config";

export const API_KEY = process.env.OPENAI_API_KEY;
export const BEARER_TOKEN = process.env.BEARER_TOKEN;
export const BASE_URL = process.env.OPENAI_BASE_URL;
export const MODEL = process.env.MODEL ?? "gpt-3.5-turbo";

async function customFetch(url: RequestInfo, init?: RequestInit) {
  return fetch(url, {
    ...init,
    headers: {
      ...init?.headers,
      authorization: `Bearer ${BEARER_TOKEN}`, // override api/bearer token
    },
  });
}

export function getClient(options?: Omit<ClientOptions, "apiKey" | "baseURL">) {
  return new OpenAI({
    apiKey: API_KEY,
    baseURL: BASE_URL,
    fetch: customFetch,
    ...options,
  });
}

export default getClient();
