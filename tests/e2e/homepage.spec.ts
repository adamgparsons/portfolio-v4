import { test, expect } from '@playwright/test';

test('should display the main heading on the home page', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Hi I’m Adam/i })).toBeVisible();
});
