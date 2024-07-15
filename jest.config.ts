import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/dist/"],
  moduleNameMapper: {
    "^visa_click_to_pay$": "<rootDir>/src/index.ts",
    "^visa_click_to_pay/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;
