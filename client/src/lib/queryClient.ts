import { QueryClient } from "@tanstack/react-query";

async function throwIfNotOk(res: Response) {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status} ${res.statusText}: ${text}`);
  }
}

async function defaultFetcher<T>(url: string): Promise<T> {
  const res = await fetch(url);
  await throwIfNotOk(res);
  return await res.json();
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const url = queryKey[0] as string;
        return defaultFetcher(url);
      },
    },
  },
});

export async function apiRequest<T = void>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
  await throwIfNotOk(res);
  return (await res.json()) as T;
}
