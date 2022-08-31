const mathOperations = require("./math_operations");

describe("math_operaations test", () => {
  test("test case sum", () => {
    var add = mathOperations.sum(1, 2);
    expect(add).toBe(3);
  });

  test("test case diff", () => {
    var sub = mathOperations.diff(5, 2);
    expect(sub).toBe(3);
  });

  test("test case product", () => {
    var multi = mathOperations.product(2, 3);
    expect(multi).toBe(6);
  });
});
