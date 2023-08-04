import { test, expect } from "@playwright/test";

test.describe("users/ POST requests", async () => {

    test('POST a User', async ({ request }) => {
        const response = await request.post(`api/user`, {
            data: {
                "name": "Jimbo",
                "job": "Leader"
            }
        });
        console.log(response.json());
        expect(response.status()).toBe(201);
        const body = await response.json()
        expect(body.name).toBe("Jimbo");
        expect(body).toHaveProperty("name", "Jimbo");
    });
});
