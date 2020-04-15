import React from "react";
import { create } from "react-test-renderer";
import Food from "../Food";
import { BrowserRouter } from "react-router-dom";

describe("Food Page renders:", () => {
  test("Without failing", () => {
    const FoodPage = create(
      <BrowserRouter>
        <Food />
      </BrowserRouter>
    );
    expect(FoodPage.toJSON()).toMatchSnapshot();
  });
});
