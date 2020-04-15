/*import React from "react";
import { render } from "@testing-library/react";
import App from "../App";*/ //Incompatible with Jest!

function filterByTerm(input) {
  return input;
}

describe("Hello world test suite", () => {
  test("Hello world test", () => {
    const input = "Hello world!";

    const output = "Hello world!";

    expect(filterByTerm(input)).toEqual(output);
  });
});
