import React from "react";
import { create } from "react-test-renderer";
import Food from "../Food";
import { BrowserRouter } from "react-router-dom";

describe("Does Food Page render:", () => {
  test("Without failing?", () => {
    //Create a snapshot of Food page
    const component = create(
      <BrowserRouter>
        <Food />
      </BrowserRouter>
    );

    //Compares it to an old snapshot
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Correctly?", () => {
    //Create a snapshot of Food page
    const component = create(
      <BrowserRouter>
        <Food />
      </BrowserRouter>
    );

    //Get the components instance
    const instance = component.root;
    const button = instance.findByType("button");
    button.props.onClick();

    expect(button.props.children).toBe("Nothing.");
  });
});
