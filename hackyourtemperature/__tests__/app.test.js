import app from "../app";
import supertest from "supertest";

const request = supertest(app);

describe("POST /weather", () => {

    test("undefined cityName should respond with a 400 status code", async () => {
        const response = await request.post("/weather").send({
            cityName: "undefined"
        });
        expect(response.statusCode).toBe(400);
    });
 test("should respond with a 200 status code for correct city name", async () => {
     const response = await request.post("/weather").send({
         cityName: "amsterdam"
     });
     expect(response.statusCode).toBe(200);
 });

});
    

