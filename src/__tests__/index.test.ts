import { Gretter } from "../index";

test("Gretter", () => {
  expect(Gretter('Stark')).toBe("Hello, Stark!");
});