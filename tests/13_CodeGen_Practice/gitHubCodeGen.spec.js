import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('skdharmavaram');
  await page.getByRole('textbox', { name: 'Password' }).fill('sk...');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('link', { name: 'Repositories' }).click();
  await page.getByRole('link', { name: 'My repositories' }).click();
  await page.getByRole('link', { name: 'New repository' }).click();
  await page.locator('.width-full.TextInput-wrapper').click();
  await page.getByRole('textbox', { name: 'Repository name *' }).fill('Shiva3');
  await page.getByRole('textbox', { name: 'Description' }).fill('SHiva');
//   await page.getByRole('button', { name: 'Public' }).click();
//   await page.getByRole('button', { name: 'Private' }).click();
  await page.getByRole('button', { name: 'Create repository' }).dblclick();
  await page.getByRole('link', { name: 'creating a new file' }).click();
  await page.getByRole('textbox', { name: 'File name' }).fill('Readme.md');
  await page.getByRole('textbox', { name: 'Editing Readme.md file' }).fill('SHivak');
  await page.getByRole('button', { name: 'Commit changes...' }).click();
  await page.getByRole('textbox', { name: 'Add an optional extended' }).fill('first commit');
  await page.getByRole('button', { name: 'Commit changes', exact: true }).click();
});
// to run the test use the command "npx playwright test tests/13_CodeGen_Practice/gitHubCodeGen.spec.js"