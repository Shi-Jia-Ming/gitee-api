import { Greeter } from "../index";

test("Greeter", () => {
  expect(Greeter('Stark')).toBe("Hello, Stark!");
});