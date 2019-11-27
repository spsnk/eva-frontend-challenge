import React from "react"
import {create} from "react-test-renderer"
import LoginForm from "../src/components/login"

describe("LoginForm", () => {
  test("Renders correctly", () => {
    const component = create(<LoginForm />).toJSON();
    expect(component).toMatchSnapshot();
  })
})