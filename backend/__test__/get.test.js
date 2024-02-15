import { expect } from "@jest/globals";

import { getShips } from "../services/apiShips";

describe("Test /api/ships", () => {
  describe("get all ship data on /api/ships", () => {
    it("return all ships", async () => {
      const actualResult = await getShips();
      expect(actualResult).toHaveLength(216);
    });
  });
});
