const request = require("supertest");
const server = require("../api/server");


describe("GET /api/jokes", () => {
  it("should be json", async () => {
    const res = await request(server).get("/api/jokes");
    expect(res.type).toBe("application/json");
  });
});
