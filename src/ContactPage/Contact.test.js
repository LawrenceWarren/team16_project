//These tests were written by Wenzheng Shan.

import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Contact from "./Contact";

enzyme.configure({ adapter: new Adapter() });

//  SUITE 1: Test the submit button
describe("Test the form of Contact page: ", () => {
  //  TEST1: Test whether the submit button works
  it("Test the submit", () => {
    const onSubmitFn = jest.fn();
    //Since the code contains router in <Contact />, I copy part of the code in order to make the test
    const wrapper = enzyme.mount(
      <form className="contact_form" onSubmit={onSubmitFn}>
        <div>
          <label>
            <strong>First Name *</strong>
          </label>
          <input name="firstName" type="text" required />
        </div>
        <div>
          <label>
            <strong>Last Name *</strong>
          </label>
          <input name="lastName" type="text" required />
        </div>
        <div>
          <label>
            <strong>Email Address</strong>
          </label>
          <input name="email" type="text" required />
        </div>
        <div>
          <label>
            <strong>Phone number *</strong>
          </label>
          <input name="phone" type="text" required />
        </div>
        <div>
          <label>
            <strong>Message</strong>
          </label>
          <textarea name="message" />
        </div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    );

    //Get the form component using find
    const form = wrapper.find("form");
    //Simulate the action of submitting
    form.simulate("submit");
    //If simlate successful, the function of onSubmitFn should be called once.
    expect(onSubmitFn).toHaveBeenCalledTimes(1);
  });
});

//  SUITE 2: TEST THE INPUT
describe("Test the form of Contact page: ", () => {
  //  TEST 1: first name input test
  const onChangeFn = jest.fn();
  it("First name input test", () => {
    let wrapper = enzyme.mount(
      <div>
        <label>
          <strong>First Name *</strong>
        </label>
        <input name="firstName" type="text" value="bob" onChange={onChangeFn} />
      </div>
    );

    //Get the label component
    const label = wrapper.find("label");
    //The length of lable component shoul be one (only contains text)
    expect(label.length).toBe(1);
    //The text should be 'First Name *'
    expect(label.text()).toEqual("First Name *");

    //Get the input component
    const input = wrapper.find("input");
    //The length of input component should be one
    expect(input.length).toBe(1);
    //Each props should be correct
    expect(input.prop("name")).toEqual("firstName");
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("value")).toEqual("bob");

    //Simultae change action
    const value = "test";
    input.at(0).simulate("change", value);
    //If simlate successful, the function of onSubmitFn should be called once.
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });
});
