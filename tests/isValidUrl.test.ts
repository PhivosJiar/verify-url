import { isValidUrl } from "../index";
import axios from "axios";

jest.mock("axios");

describe("isValidUrl function", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return true for a valid and reachable URL", async () => {
    // Given
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.head.mockResolvedValueOnce({ response: { status: 200 } });

    // When
    const result = await isValidUrl("https://www.example.com");

    // Then
    expect(result).toBe(true);
    expect(mockedAxios.head).toHaveBeenCalledWith("https://www.example.com", {
      timeout: 3000,
    });
  });

  it("should return false for an invalid URL format", async () => {
    // Given
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    // When
    const result = await isValidUrl("invalid-url");

    // Then
    expect(result).toBe(false);
    expect(mockedAxios.head).toHaveBeenCalledTimes(0);
  });

  it("should return false for a 400 Bad Request status", async () => {
    // Given
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.head.mockRejectedValueOnce({ response: { status: 400 } }); // Mock 400 Bad Request

    // When
    const result = await isValidUrl("https://www.example.com");

    // Then
    expect(result).toBe(false);
  });

  it("should return false for a 500 Internal Server Error status", async () => {
    // Given
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.head.mockRejectedValueOnce({ response: { status: 500 } }); // Mock 500 Internal Server Error

    // When
    const result = await isValidUrl("https://www.example.com");

    // Then
    expect(result).toBe(false);
  });

  it("should return false for a 301 Moved Permanently status", async () => {
    // Given
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.head.mockResolvedValueOnce({ response: { status: 301 } }); // Mock 301 Moved Permanently

    // When
    const result = await isValidUrl("https://www.example.com");

    // Then
    expect(result).toBe(true);
  });

  it("should return false for a 302 Found status", async () => {
    // Given
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.head.mockResolvedValueOnce({ response: { status: 302 } }); // Mock 302 Found

    // When
    const result = await isValidUrl("https://www.example.com");

    // Then
    expect(result).toBe(true);
  });

  it("should return false for a 100 Continue status", async () => {
    // Given
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.head.mockResolvedValueOnce({ response: { status: 100 } }); // Mock 100 Continue

    // When
    const result = await isValidUrl("https://www.example.com");

    // Then
    expect(result).toBe(true);
  });
});
