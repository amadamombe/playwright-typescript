import { test, expect } from "@playwright/test";

test.describe("users/ GET requests", async () => {

    test("GET users for a num of pages", async ({ request }) => {
        const response = await request.get("api/users?page=2");

        console.log(response.json);
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.page).toBe(2);
        expect(body.per_page).toBeGreaterThan(2);
        expect(body.total_pages).toBeGreaterThanOrEqual(2);
        expect(body.per_page).toBeLessThan(7);
        expect(body.data[1]).toHaveProperty('avatar');
        expect(isValidObj(body.data[0])).toBe(true);
    });

});

export function isValidObj(obj: any): boolean {
    if (typeof obj !== 'object') {
        return false;
    }

    const requiredKeys = ['id', 'email', 'first_name', 'last_name', 'avatar'];
    for (const key of requiredKeys) {
        if (!obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};