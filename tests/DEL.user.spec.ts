import { test, expect } from "@playwright/test";

test.describe("users/ DEL requests", async () => {

    test.skip('DEL a User by id', async ({ request }) => {
        const response = await request.delete(`api/user/1`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.json());
        expect(response.status()).toBe(204);
    });
});
