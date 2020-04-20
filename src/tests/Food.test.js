//These tests were written by Lawrence Warren.

import React from "react";
import { create } from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Food from "../Food";

//! SUITE 1 : Snapshot rendering tests
describe("Food page status: ", () => {
  //! TEST 1 : If the food component has been updated since last snapshot
  test("If the <Food /> component has been updated.", () => {
    //Create a snapshot of Food page
    const component = create(<Food />);

    //Compares it to an old snapshot
    expect(component.toJSON()).toMatchSnapshot();
  });
});

//! SUITE 2 : Mocking button presses
describe("Button functionality: ", () => {
  //! TEST 1 - index from 0 -> 1
  test("swipeRight increments index correctly.", () => {
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
  test("swipeRight handles index overflow.", () => {
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
  test("swipeLeft decrements index correctly.", () => {
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
  test("swipeLeft handles index underflow.", () => {
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

//! SUITE 3 : Mocking API calls
describe("Server connection:", () => {
  let wrapper; //stores shallow rendered component

  //Do this before all tests
  beforeAll(() => {
    configure({ adapter: new Adapter() });
    global.fetch = jest.fn();
  });
  //Do this before each test
  beforeEach(() => {
    wrapper = shallow(<Food />, { disableLifecycleMethods: true });
  });
  //Do this after each test
  afterEach(() => {
    wrapper.unmount();
  });

  //! TEST 1 : If component did mount updates state successfully on code 200 API call
  test("That componentDidMount() updates state successfully.", (done) => {
    //Creates a "spy" function that emulates componentDidMount()
    const spyDidMount = jest.spyOn(Food.prototype, "componentDidMount");

    //Mock API call
    fetch.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve([
            {
              image: "example0",
              name: "example0",
              address: "example0",
              type: "example0",
              price: "example0",
              link: "example0",
            },
            {
              image: "example1",
              name: "example1",
              address: "example1",
              type: "example1",
              price: "example1",
              link: "example1",
            },
          ]);
        },
      });
    });

    //Calls componentDidMount
    const didMount = wrapper.instance().componentDidMount();

    //expecting componentDidMount to have been called
    expect(spyDidMount).toHaveBeenCalled();

    didMount.then(() => {
      wrapper.update();

      //Expect state to have been updated
      expect(wrapper.state("foodList")).toMatchObject([
        {
          image: "example0",
          name: "example0",
          address: "example0",
          type: "example0",
          price: "example0",
          link: "example0",
        },
        {
          image: "example1",
          name: "example1",
          address: "example1",
          type: "example1",
          price: "example1",
          link: "example1",
        },
      ]);

      //Clean up
      spyDidMount.mockRestore();
      fetch.mockClear();
      done();
    });
  });

  //! TEST 2 : If component did mount errors correctly on code 400 HTTP request
  test("That componentDidMount() errors correctly on error encoded HTTP request.", (done) => {
    //Creates spy functions that emulates componentDidMount() and console.Error()
    const spyDidMount = jest.spyOn(Food.prototype, "componentDidMount");
    const spyError = jest.spyOn(console, "error");

    //Mock API call
    fetch.mockImplementation(() => {
      return Promise.resolve({
        status: 404,
        json: () => {
          return Promise.resolve([]);
        },
      });
    });

    //Calls componentDidMount
    const didMount = wrapper.instance().componentDidMount();

    //expecting componentDidMount to have been called
    expect(spyDidMount).toHaveBeenCalled();

    didMount.then(() => {
      wrapper.update();

      //Was console.Error called?
      expect(spyError).toHaveBeenCalled();

      //Clean up
      spyDidMount.mockRestore();
      spyError.mockRestore();
      fetch.mockClear();
      done();
    });
  });
});
