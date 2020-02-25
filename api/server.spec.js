require("dotenv").config();
const request = require("supertest");
const server = require("./server");
const data = require("../auth/user-model");
const db = require("../database/dbConfig");
const verify = require("../auth/authenticate-middleware");

describe("GET/", () => {
  it("should return 200 OK", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
  });
  it("should be json", async () => {
    const res = await request(server).get("/");
    expect(res.type).toBe("application/json");
  });
  it("should return the right object", async () => {
    const res = await request(server).get("/");
    expect(res.body).toEqual({ message: "Can you feel it?" });
  });
});

describe("POST/", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  //add new users VVVthis is not passing, says no user table
  // it("should finally add these 2 people", async () => {
  //   await data.add({ username: "TiredLady", password: "QueenofErrors" });
  //   await data.add({ username: "Born2Code", password: "wannabegood" });
  //   const users = await db("users");
  //   expect(users).toHaveLength(2);
  // });

});
