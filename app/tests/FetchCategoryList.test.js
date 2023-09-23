// import matchers from "@testing-library/jest-dom/matchers";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, vi } from "vitest";
import { it } from "vitest";
import FetchCategoryList from "../src/categories/FetchCategoryList";


it('should call after a delay', async () => {
    await expect(FetchCategoryList()).resolves.instanceOf(Object)
})

afterEach(() => {
    cleanup();
})