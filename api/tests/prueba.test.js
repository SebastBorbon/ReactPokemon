const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const app = require("../app").app;

describe("Prueba integracion", () => {
  it("should return 401 when no jwt token available", (done) => {
    chai
      .request(app)
      .get("/teams")
      .end((err, res) => {
        chai.assert.equal(res.statusCode, 401);
        done();
      });
  });

  it("should return 200 when jwt is valid", (done) => {
    chai
      .request(app)
      .post("/auth/login")
      .set("content-type", "application/json")
      .send({ user: "Messi", password: " god" })
      .end((err, res) => {
        chai.assert.equal(res.statusCode, 200);
        chai
          .request(app)
          .get("/teams")
          .set("Athorization", `JWT ${res.body.token}`)
          .end((err, res) => {
            chai.assert.equal(res.statusCode, 200);
            done();
          });
      });
  });
});
