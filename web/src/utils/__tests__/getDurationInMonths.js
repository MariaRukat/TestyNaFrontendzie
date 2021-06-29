import { getDurationInMonths } from "../getDurationInMonths";

describe("getDurationInMonths", () => {
  it("throw error when argument is incorrect", () => {
    const result = () => getDurationInMonths("not number");
    expect(result).toThrowError();

    expect(() => getDurationInMonths(20)).not.toThrowError();
  });

  it.each`
    daysNumber | expectedMonths
    ${35}      | ${1}
    ${45}      | ${2}
    ${65}      | ${2}
    ${78}      | ${3}
  `(
    "calculates months from days correctly for $daysNumber",
    ({ daysNumber, expectedMonths }) => {
      const result = getDurationInMonths(daysNumber);
      expect(result.value).toBe(expectedMonths);
      expect(result.type).toBe("months");
    }
  );
});
