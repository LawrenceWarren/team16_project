//These tests were written by Wenzheng Shan.

import React from "react";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import Footer from "../Footer";

enzyme.configure({ adapter: new Adapter() });

//  SUITE 1: Snapshot rendering tests
describe("Footer Component status: ", () => {
  //  TEST 1: If the footer component has been updated since last snapshot
  it("If the <Footer /> component has been updated.", () => {
    //Create a snap shot of footer page
    const tree = renderer.create(<Footer />).toJSON();

    //Compares it to an old snapshot
    expect(tree).toMatchSnapshot();
  });
});

//  SUITE 2: HEADER TEST
describe("Header Test: ", () => {
  //  TEST 1: If the footer head is Get Involved
  it("If the footer head is Get Involved.", () => {
    const footer = enzyme.shallow(<Footer />);
    const head = footer.find(".banner");
    expect(head.text()).toBe(" Get Involved: ");
  });
});

//  SUITE 3: BUTTON NUMBER TEST
describe("Button Number Test: ", () => {
  const footer = enzyme.shallow(<Footer />);
  //  TEST 1: The number of donate Button should be 1
  it("The number of donate button.", () => {
    const button = footer.find("button");
    expect(button.find(".donate").length).toBe(1);
  });

  //  TEST 2: The number of social media button should be 5
  it("The number of social media button.", () => {
    const SocialButton = footer.find(".SocialButtons");
    expect(SocialButton.children().length).toBe(5);
  });

  //  TEST 3: The number of further information button should be 4
  it("The number of further information button", () => {
    expect(footer.find("a").length).toBe(4);
  });
});
