import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter } from "@tanstack/react-router";
import { afterEach, describe, expect, it, vi } from "vitest";

import { routeTree } from "@/routeTree.gen";

async function loadAt(path: string) {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    history: createMemoryHistory({ initialEntries: [path] }),
  });
  await router.load();
  return router;
}

afterEach(() => {
  vi.restoreAllMocks();
});

// Check route matching without mounting the full-document Start shell in a div.
describe("App routing", () => {
  it("renders the index route", async () => {
    const router = await loadAt("/");
    expect(router.state.matches.some(match => match.routeId === "/")).toBe(true);
  });

  it("renders the not-found route", async () => {
    vi.spyOn(console, "warn").mockImplementation(() => undefined);

    const router = await loadAt("/this-route-does-not-exist");
    expect(router.state.matches.map(match => match.routeId)).toEqual(["__root__"]);
  });

  it("renders the shop route", async () => {
    const router = await loadAt("/shop");
    expect(router.state.matches.some(match => match.routeId === "/shop")).toBe(true);
  });
});
