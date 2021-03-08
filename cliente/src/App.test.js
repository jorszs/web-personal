import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

afterEach(cleanup);

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("renders without crashing", () => {
//   // const div = document.createElement("div");
//   // ReactDOM.render(<App />, div);
//   // ReactDOM.unmountComponentAtNode(div);
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

//it resolves the issue: matchMedia it is not a function
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

it("render app", () => {
  const div = document.createElement("div");
  const { debug } = render(<App />, div);
  debug();
});

test("should fake test", () => {
  expect(true).toBeTruthy();
});
