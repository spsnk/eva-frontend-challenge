import React from "react"
import { create } from "react-test-renderer"
import Result from "../src/components/result"

describe("Result", () => {
  test("Returns the correct result for Assymetric", () => {
    const component = create(
      <Result datetime="2019-10-13T02:21:14.321Z" result="Asymmetric" id={0} />
    )
    const instance = component.root
    const result = instance.findByType("strong")
    expect(result.props.children).toBe("Asymmetric")
  })
  test("Returns the correct informational text for Assymetric", () => {
    const component = create(
      <Result datetime="2019-10-13T02:21:14.321Z" result="Asymmetric" id={0} />
    )
    const instance = component.root
    const text = instance.findByType("span")
    expect(text.props.children).toBe(
      "There is a discrepancy in the density of your tissue. This is normal in most cases and we need more information to give you an accurate result. Please schedule a follow-up exploration at any of our clinics."
    )
  })
  test("Returns the correct result for Not Assymetric", () => {
    const component = create(
      <Result
        datetime="2019-10-13T02:21:14.321Z"
        result="Not asymmetric"
        id={0}
      />
    )
    const instance = component.root
    const result = instance.findByType("strong")
    expect(result.props.children).toBe("Not asymmetric")
  })
  test("Returns the correct informational text for Not Assymetric", () => {
    const component = create(
      <Result
        datetime="2019-10-13T02:21:14.321Z"
        result="Not asymmetric"
        id={0}
      />
    )
    const instance = component.root
    const text = instance.findByType("span")
    expect(text.props.children).toBe(
      "Everything looks normal. Don't forget to check regularly at our clinics."
    )
  })
})
