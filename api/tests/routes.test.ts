import app from "../app";
import supertest from "supertest";
import { expect, describe, it } from "vitest";

describe('GET /', () => {
    it('should send back some data', async () => {
        const response = await supertest(app).get('/');
        expect(response.body.message).toBe('Home');
    })
})