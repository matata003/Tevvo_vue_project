<<<<<<< HEAD
# Tevvo_vue_project
This project fetches Pokémon data using Vue 3.
=======
# Vue 3 + Vite

A responsive Vue 3 web app using the PokéAPI to fetch, display, and search Pokémon data. Includes mock authentication and protected routes.
# Live Demo
https://tevvovuechallange.vercel.app/
## 🚀 Features
- Login with mock credentials (`test@gmail.com` / `test123`)
- View Pokémon in a responsive grid
- Search and filter Pokémon
- Details page with full data
- Protected routes using JWT-like simulation
  

## 🔐 Authentication
- Mock login using hardcoded credentials
- Token (`mock-jwt-token`) stored in `localStorage`
- Vue Router navigation guard protects `/home` and `/details/:id` routes

  ## Test Coverage Report

Below is the screenshot of the test coverage result:
## ✅ Test Coverage

[![Coverage Report](./public/images/coverage report1.png)](./public/images/coveragereport2.png)


(.\images\CoverageReport2.png)
  
## ✅ Testing
- Tested with Vitest
- Example test: `src/utils/__tests__/capitalize.test.js`
- To run tests:
```bash
npm run test
 Include a screenshot of test coverage report (you can run npx vitest --coverage)
