//These tests were written by Lawrence Warren. There are only small edits made
//From Food.test.js since the files are so similar that they are effectively the same.

import React from "react";
import { create } from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Charity from "../Charity";

//! SUITE 1 : Snapshot rendering tests
describe("Charity page status: ", () => {
  //! TEST 1 : If the Charity component has been updated since last snapshot
  test("If the <Charity /> component has been updated.", () => {
    //Create a snapshot of Charity page
    const component = create(<Charity />);

    //Compares it to an old snapshot
    expect(component.toJSON()).toMatchSnapshot();
  });
});

//! SUITE 2 : Mocking button presses
describe("Button functionality: ", () => {
  //! TEST 1 - index from 0 -> 1
  test("swipeRight increments index correctly.", () => {
    //Create several JS representations of DOM element <Charity />
    const root = create(<Charity />).root;
    const instance = root.instance;

    //set the state
    instance.setState({
      index: 0,
      charityList: [
        {
          charityId: "testvalue0",
          charity_name: "testvalue0",
          charity_phone: "testvalue0",
          charity_email: "testvalue0",
          charity_weblink: "testvalue0",
          charity_introduce: "testvalue0",
          charity_image: "testvalue0",
        },
        {
          charityId: "testvalue1",
          charity_name: "testvalue1",
          charity_phone: "testvalue1",
          charity_email: "testvalue1",
          charity_weblink: "testvalue1",
          charity_introduce: "testvalue1",
          charity_image: "testvalue1",
        },
        {
          charityId: "testvalue2",
          charity_name: "testvalue2",
          charity_phone: "testvalue2",
          charity_email: "testvalue2",
          charity_weblink: "testvalue2",
          charity_introduce: "testvalue2",
          charity_image: "testvalue2",
        },
      ],
    });

    //The children components which should have their src/children updated
    const image = root.findByProps({ className: "picture" });
    const name = root.findByProps({ id: "titleID" });
    const address = root.findByProps({ id: "phoneID" });
    const type = root.findByProps({ id: "emailID" });
    const price = root.findByProps({ id: "introductionID" });
    const link = root.findByProps({ id: "weblinkID" });

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
    //Create several JS representations of DOM element <Charity />
    const root = create(<Charity />).root;
    const instance = root.instance;

    //set the state
    instance.setState({
      index: 2,
      charityList: [
        {
          charityId: "testvalue0",
          charity_name: "testvalue0",
          charity_phone: "testvalue0",
          charity_email: "testvalue0",
          charity_weblink: "testvalue0",
          charity_introduce: "testvalue0",
          charity_image: "testvalue0",
        },
        {
          charityId: "testvalue1",
          charity_name: "testvalue1",
          charity_phone: "testvalue1",
          charity_email: "testvalue1",
          charity_weblink: "testvalue1",
          charity_introduce: "testvalue1",
          charity_image: "testvalue1",
        },
        {
          charityId: "testvalue2",
          charity_name: "testvalue2",
          charity_phone: "testvalue2",
          charity_email: "testvalue2",
          charity_weblink: "testvalue2",
          charity_introduce: "testvalue2",
          charity_image: "testvalue2",
        },
      ],
    });

    //The children components which should have their src/children updated
    const image = root.findByProps({ className: "picture" });
    const name = root.findByProps({ id: "titleID" });
    const address = root.findByProps({ id: "phoneID" });
    const type = root.findByProps({ id: "emailID" });
    const price = root.findByProps({ id: "introductionID" });
    const link = root.findByProps({ id: "weblinkID" });

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
    //Create several JS representations of DOM element <Charity />
    const root = create(<Charity />).root;
    const instance = root.instance;

    //set the state
    instance.setState({
      index: 1,
      charityList: [
        {
          charityId: "testvalue0",
          charity_name: "testvalue0",
          charity_phone: "testvalue0",
          charity_email: "testvalue0",
          charity_weblink: "testvalue0",
          charity_introduce: "testvalue0",
          charity_image: "testvalue0",
        },
        {
          charityId: "testvalue1",
          charity_name: "testvalue1",
          charity_phone: "testvalue1",
          charity_email: "testvalue1",
          charity_weblink: "testvalue1",
          charity_introduce: "testvalue1",
          charity_image: "testvalue1",
        },
        {
          charityId: "testvalue2",
          charity_name: "testvalue2",
          charity_phone: "testvalue2",
          charity_email: "testvalue2",
          charity_weblink: "testvalue2",
          charity_introduce: "testvalue2",
          charity_image: "testvalue2",
        },
      ],
    });

    //The children components which should have their src/children updated
    const image = root.findByProps({ className: "picture" });
    const name = root.findByProps({ id: "titleID" });
    const address = root.findByProps({ id: "phoneID" });
    const type = root.findByProps({ id: "emailID" });
    const price = root.findByProps({ id: "introductionID" });
    const link = root.findByProps({ id: "weblinkID" });

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
    //Create several JS representations of DOM element <Charity />
    const root = create(<Charity />).root;
    const instance = root.instance;

    //set the state
    instance.setState({
      index: 0,
      charityList: [
        {
          charityId: "testvalue0",
          charity_name: "testvalue0",
          charity_phone: "testvalue0",
          charity_email: "testvalue0",
          charity_weblink: "testvalue0",
          charity_introduce: "testvalue0",
          charity_image: "testvalue0",
        },
        {
          charityId: "testvalue1",
          charity_name: "testvalue1",
          charity_phone: "testvalue1",
          charity_email: "testvalue1",
          charity_weblink: "testvalue1",
          charity_introduce: "testvalue1",
          charity_image: "testvalue1",
        },
        {
          charityId: "testvalue2",
          charity_name: "testvalue2",
          charity_phone: "testvalue2",
          charity_email: "testvalue2",
          charity_weblink: "testvalue2",
          charity_introduce: "testvalue2",
          charity_image: "testvalue2",
        },
      ],
    });

    //The children components which should have their src/children updated
    const image = root.findByProps({ className: "picture" });
    const name = root.findByProps({ id: "titleID" });
    const address = root.findByProps({ id: "phoneID" });
    const type = root.findByProps({ id: "emailID" });
    const price = root.findByProps({ id: "introductionID" });
    const link = root.findByProps({ id: "weblinkID" });

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
    wrapper = shallow(<Charity />, { disableLifecycleMethods: true });
  });
  //Do this after each test
  afterEach(() => {
    wrapper.unmount();
  });

  //! TEST 1 : If component did mount updates state successfully on code 200 API call
  test("That componentDidMount() updates state successfully.", (done) => {
    //Creates a "spy" function that emulates componentDidMount()
    const spyDidMount = jest.spyOn(Charity.prototype, "componentDidMount");

    //Mock API call
    fetch.mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve([
            {
              charityId: "example0",
              charity_name: "example0",
              charity_phone: "example0",
              charity_email: "example0",
              charity_weblink: "example0",
              charity_introduce: "example0",
              charity_image: "example0",
            },
            {
              charityId: "example1",
              charity_name: "example1",
              charity_phone: "example1",
              charity_email: "example1",
              charity_weblink: "example1",
              charity_introduce: "example1",
              charity_image: "example1",
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
      expect(wrapper.state("charityList")).toMatchObject([
        {
          charityId: "example0",
          charity_name: "example0",
          charity_phone: "example0",
          charity_email: "example0",
          charity_weblink: "example0",
          charity_introduce: "example0",
          charity_image: "example0",
        },
        {
          charityId: "example1",
          charity_name: "example1",
          charity_phone: "example1",
          charity_email: "example1",
          charity_weblink: "example1",
          charity_introduce: "example1",
          charity_image: "example1",
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
    const spyDidMount = jest.spyOn(Charity.prototype, "componentDidMount");
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
