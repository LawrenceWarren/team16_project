import React from "react";
import { create } from "react-test-renderer";
import Food from "../Food";

describe("Food page status:", () => {
  test("Has the <Food /> component been updated", () => {
    //Create a snapshot of Food page
    const component = create(<Food />);

    //Compares it to an old snapshot
    expect(component.toJSON()).toMatchSnapshot();
  });

  //More tests here
});

describe("Button functionality:", () => {
  //! TEST 1 - index from 0 -> 1
  test("swipeRight increments index correctly", () => {
    //Create several JS representations of DOM element <Food />
    const root = create(<Food />).root;
    const instance = root.instance;

    //set the state
    instance.setState({
      index: 0,
      foodList: [
        {
          image: "testvalue0",
          name: "testvalue0",
          address: "testvalue0",
          type: "testvalue0",
          price: "testvalue0",
          link: "testvalue0",
        },
        {
          image: "testvalue1",
          name: "testvalue1",
          address: "testvalue1",
          type: "testvalue1",
          price: "testvalue1",
          link: "testvalue1",
        },
        {
          image: "testvalue2",
          name: "testvalue2",
          address: "testvalue2",
          type: "testvalue2",
          price: "testvalue2",
          link: "testvalue2",
        },
      ],
    });

    //The children components which should have their src/children updated
    const image = root.findByProps({ className: "picture" });
    const name = root.findByProps({ id: "nameID" });
    const address = root.findByProps({ id: "addressID" });
    const type = root.findByProps({ id: "typeID" });
    const price = root.findByProps({ id: "priceID" });
    const link = root.findByProps({ id: "linkID" });

    //The button has it's onClick tested
    root.findByProps({ className: "swipeRight" }).props.onClick();

    //What to expect
    expect(image.props.src).toBe("testvalue1");
    expect(name.props.children).toBe("testvalue1");
    expect(address.props.children).toBe("testvalue1");
    expect(type.props.children).toBe("testvalue1");
    expect(price.props.children).toBe("testvalue1");
    expect(link.props.children).toBe("testvalue1");
  });

  //! TEST 2 - index from 2 -> 0
  test("swipeRight handles index overflow", () => {
    //Create several JS representations of DOM element <Food />
    const root = create(<Food />).root;
    const instance = root.instance;

    //set the state
    instance.setState({
      index: 2,
      foodList: [
        {
          image: "testvalue0",
          name: "testvalue0",
          address: "testvalue0",
          type: "testvalue0",
          price: "testvalue0",
          link: "testvalue0",
        },
        {
          image: "testvalue1",
          name: "testvalue1",
          address: "testvalue1",
          type: "testvalue1",
          price: "testvalue1",
          link: "testvalue1",
        },
        {
          image: "testvalue2",
          name: "testvalue2",
          address: "testvalue2",
          type: "testvalue2",
          price: "testvalue2",
          link: "testvalue2",
        },
      ],
    });

    //The children components which should have their src/children updated
    const image = root.findByProps({ className: "picture" });
    const name = root.findByProps({ id: "nameID" });
    const address = root.findByProps({ id: "addressID" });
    const type = root.findByProps({ id: "typeID" });
    const price = root.findByProps({ id: "priceID" });
    const link = root.findByProps({ id: "linkID" });

    //The button has it's onClick tested
    root.findByProps({ className: "swipeRight" }).props.onClick();

    //What to expect
    expect(image.props.src).toBe("testvalue0");
    expect(name.props.children).toBe("testvalue0");
    expect(address.props.children).toBe("testvalue0");
    expect(type.props.children).toBe("testvalue0");
    expect(price.props.children).toBe("testvalue0");
    expect(link.props.children).toBe("testvalue0");
  });

  //! TEST 3 - index from 1 -> 0
  test("swipeLeft decrements index correctly", () => {
    //Create several JS representations of DOM element <Food />
    const root = create(<Food />).root;
    const instance = root.instance;

    //set the state
    instance.setState({
      index: 1,
      foodList: [
        {
          image: "testvalue0",
          name: "testvalue0",
          address: "testvalue0",
          type: "testvalue0",
          price: "testvalue0",
          link: "testvalue0",
        },
        {
          image: "testvalue1",
          name: "testvalue1",
          address: "testvalue1",
          type: "testvalue1",
          price: "testvalue1",
          link: "testvalue1",
        },
        {
          image: "testvalue2",
          name: "testvalue2",
          address: "testvalue2",
          type: "testvalue2",
          price: "testvalue2",
          link: "testvalue2",
        },
      ],
    });

    //The children components which should have their src/children updated
    const image = root.findByProps({ className: "picture" });
    const name = root.findByProps({ id: "nameID" });
    const address = root.findByProps({ id: "addressID" });
    const type = root.findByProps({ id: "typeID" });
    const price = root.findByProps({ id: "priceID" });
    const link = root.findByProps({ id: "linkID" });

    //The button has it's onClick tested
    root.findByProps({ className: "swipeLeft" }).props.onClick();

    //What to expect
    expect(image.props.src).toBe("testvalue0");
    expect(name.props.children).toBe("testvalue0");
    expect(address.props.children).toBe("testvalue0");
    expect(type.props.children).toBe("testvalue0");
    expect(price.props.children).toBe("testvalue0");
    expect(link.props.children).toBe("testvalue0");
  });

  //! TEST 4 : index from 0 -> 2
  test("swipeLeft handles index underflow", () => {
    //Create several JS representations of DOM element <Food />
    const root = create(<Food />).root;
    const instance = root.instance;

    //set the state
    instance.setState({
      index: 0,
      foodList: [
        {
          image: "testvalue0",
          name: "testvalue0",
          address: "testvalue0",
          type: "testvalue0",
          price: "testvalue0",
          link: "testvalue0",
        },
        {
          image: "testvalue1",
          name: "testvalue1",
          address: "testvalue1",
          type: "testvalue1",
          price: "testvalue1",
          link: "testvalue1",
        },
        {
          image: "testvalue2",
          name: "testvalue2",
          address: "testvalue2",
          type: "testvalue2",
          price: "testvalue2",
          link: "testvalue2",
        },
      ],
    });

    //The children components which should have their src/children updated
    const image = root.findByProps({ className: "picture" });
    const name = root.findByProps({ id: "nameID" });
    const address = root.findByProps({ id: "addressID" });
    const type = root.findByProps({ id: "typeID" });
    const price = root.findByProps({ id: "priceID" });
    const link = root.findByProps({ id: "linkID" });

    //The button has it's onClick tested
    root.findByProps({ className: "swipeLeft" }).props.onClick();

    //What to expect
    expect(image.props.src).toBe("testvalue2");
    expect(name.props.children).toBe("testvalue2");
    expect(address.props.children).toBe("testvalue2");
    expect(type.props.children).toBe("testvalue2");
    expect(price.props.children).toBe("testvalue2");
    expect(link.props.children).toBe("testvalue2");
  });
});

describe("Connecting to server", () => {
  //! TEST 1 - something
  test("Something", () => {
    //Some test
  });
});

//https://medium.com/@manastunga/unit-testing-api-calls-in-react-enzyme-and-jest-133b87aaacb4
//https://medium.com/@the_teacher/how-to-test-console-output-console-log-console-warn-with-rtl-react-testing-library-and-jest-6df367736cf0
