import { test, expect } from "@playwright/test";

test.describe("users/ PUT requests", async () => {

    test('PUT a User bu Id', async ({ request }) => {
        const response = await request.put(`api/user/1`, {
            data: {
                "name": "JimboPUT",
                "job": "LeaderPUT"
            }
        });
        console.log(response.json());
        expect(response.status()).toBe(200);
        const body = await response.json()
        expect(body.name).toBe("JimboPUT");
        expect(body).toHaveProperty("name", "JimboPUT");
    });
});
