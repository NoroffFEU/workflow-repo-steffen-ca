import { beforeEach, describe, expect, it } from "vitest";
import { getUsername, saveUser } from "../../js/utils/storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    saveUser({ name: "steffen" });

    expect(getUsername()).toBe("steffen");
  });

  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
