import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("<App/>", () => {
  it("to check list is not empty list", () => {
    const wrapper = shallow(<App />);
    const list = wrapper.find("#playerList");
    expect(list).toBeTruthy();
  });

  it("it should set state of variable 'name' to the passed value", () => {
    const mockFn = jest.fn();
    const input = shallow(
      <input type="text" placeholder="Enter Nickname" onChange={mockFn} />
    );

    input.find("input").simulate("change", { target: { value: "Boogie" } });
    expect(mockFn.mock.calls[0][0]).toEqual({ target: { value: "Boogie" } });
  });
});
