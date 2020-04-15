import React from "react";
import { create } from "react-test-renderer";
import Food from "../Food";

describe("Food Page renders:", () => {
  test("Without failing", () => {
    const button = create(<Food />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});
