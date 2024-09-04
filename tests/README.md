# Tests

## Setup

These tests require an API application to be running on `http://localhost:3000`.

> [!NOTE]  
> To change this, you can modify the [`playwright.config.ts`](./playwright.config.ts)

You can either start one of the provided applications in `/applications`, or provide your own application which follows
the same API contract. Please see the respective `README.md` for each application and how to start the API server.

## Running Tests

To run the headless `Playwright` tests (or in CI):

```bash
npm run test
```

Or, to open the `Playwright` UI:

```bash
npm run test:open
```
