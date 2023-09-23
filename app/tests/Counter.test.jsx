// import matchers from "@testing-library/jest-dom/matchers";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";

import Counter from "../src/Counter";
import { it } from "vitest";


it('should render Counter', () => {
    render(<Counter />)
    screen.debug()
})

afterEach(() => {
    cleanup();
})