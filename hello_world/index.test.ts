import { echoHelloWorld } from ".";

describe("hello world", () => {
  test("should return hello world", () => {
    expect(echoHelloWorld()).toEqual("hello world");
  });
});
