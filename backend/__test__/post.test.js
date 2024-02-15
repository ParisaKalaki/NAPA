import { expect } from "@jest/globals";

import { createShip } from "../services/apiShips";

describe("Test /api/ships", () => {
  describe("Create a new ship /api/ships", () => {
    it("return all ships", async () => {
      const ship = {
        BaseDateTime: "2023-01-01T00:00:00.000Z",
        LAT: 47.3036,
        LON: -122.50945,
        IMO: 234,
      };
      const actualResult = await createShip(ship);
      expect(actualResult).toBe("Ok");
    });
  });
});
