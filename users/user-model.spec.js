const Users = require("./user-model");
const db = require("../database/dbConfig");

const createUser = {
  username: "TiredLady",
  password: "QueenofErrors"
};

const oldUser = {
  username: "Born2Code",
  password: "wannabegood"
};

describe("user model", () => {
  describe("add", () => {
    it("should post new user to the db", async () => {
      await Users.add(createUser);
      const user = await db("users");
      expect(user).toHaveLength(1);
    });
    it("should return the newly added user", async () => {
      const user = await Users.add(oldUser);
      expect(user.username).toEqual(oldUser.username);
      expect(user.password).toHaveProperty("password", oldUser.password);
    });
  });
  describe("find", () => {
    it("should return users", async () => {
      await Users.add(createUser);
      const showUsers = await Users.find();
      expect(typeof( showUsers)).toEqual(typeof ([]));
      expect(showUsers.length).toEqual(1);
    });
  });
  describe("findBy", () => {
    it("should return requested user", async () => {
      const user = await Users.add(createUser);
      const getUser = await Users.findBy(user).first();
      expect(getUser.password).toEqual(createUser.password);
      expect(getUser).toHaveProperty("username", createUser.username);
    });
  });
  describe("findById", () => {
    it("should return requested user by user ID", async () => {
      const user = await Users.add(createUser);
      const rtnUser = await Users.findById(user.id);
      expect(rtnUser.username).toEqual(createUser.username);
      expect(rtnUser).toHaveProperty("username", createUser.username);
    });
  });
  beforeEach(async () => {
    await db("users").truncate();
  });
});
