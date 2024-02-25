import { isValidFormat } from "../utils/verifyUrlFormat";

describe("isValidFormat function", () => {
  it("should return true for valid format URLs", () => {
    expect(isValidFormat("https://www.example.com")).toBe(true);
    expect(isValidFormat("http://subdomain.example.com")).toBe(true);
    expect(isValidFormat("https://example.com/path/to/resource")).toBe(true);
    expect(isValidFormat("http://www.example.com/index.html?param=value")).toBe(
      true,
    );
  });

  it("should return false for invalid format URLs", () => {
    expect(isValidFormat("invalid-url")).toBe(false);
    expect(isValidFormat("http://example")).toBe(false);
    expect(isValidFormat("htp://example.com")).toBe(false);
    expect(isValidFormat("https://example.com path")).toBe(false);
    expect(isValidFormat("ftp://example.com")).toBe(false);
    expect(isValidFormat("http://.com")).toBe(false);
    expect(isValidFormat("http://example..com")).toBe(false);
  });

  it("should return false for empty string", () => {
    expect(isValidFormat("")).toBe(false);
  });
});
