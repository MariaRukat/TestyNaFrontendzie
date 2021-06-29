const { getDurationInWeeks } = require("../getDurationInWeeks");

describe("getDurationInWeeks", () => {
  it("throws error when argument is not a number", () => {
    const result = () => getDurationInWeeks("not number");
    expect(result).toThrowError("Days should be number");
    expect(() => getDurationInWeeks(20)).not.toThrowError();
  });

  it.each`
    daysNumber | expectedWeeks
    ${27}      | ${4}
    ${20}      | ${3}
    ${15}      | ${2}
    ${11}      | ${2}
  `(
    "calculates weeks properly for $daysNumber",
    ({ daysNumber, expectedWeeks }) => {
      const result = getDurationInWeeks(daysNumber);
      expect(result.value).toBe(expectedWeeks);
      expect(result.type).toBe("weeks");
    }
  );
});
