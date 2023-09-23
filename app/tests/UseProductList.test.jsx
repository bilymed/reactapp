import { expect, test } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UseProductList from "../src/products/useProductList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: false,
    },
  },
});

test("Return an empty list from UseProductList hook", () => {
  const { result } = renderHook(() => UseProductList(""), {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
  });
  const [products, status] = result.current;
  expect(products).toHaveLength(0);
  expect(status).toBe("loading");
});

test("Return back a list of product when passing a Gategory Id", async () => {
  const products = ["Macbook Pro, Mac mini"];
  fetch.mockResponseOnce(JSON.stringify({ category: "Mac", products }));

  const { result } = renderHook(() => UseProductList("Mac"), {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
  });
  await waitFor(() => expect(result.current[1]).toBe("success"));

  const [productList] = result.current;
  expect(productList).toEqual(products);
});
