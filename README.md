# ChoronoFlow

This repo is a final group project completed as part of the [Dev Academy Aotearoa](https://devacademy.co.nz/) curriculum. This single page application (SPA) gives a chronological indicator of major historical inventions, events and people. It was built using React, TypeScript, Express, Node, Vitest, Knex and Sqlite3. I worked on testing and the majority of the frontend components and styling with Tailwind. 

## Setup


1. Clone this repo, navigate to it, install packages, and start the server with `npm run dev`
  <details style="padding-left: 2em; padding-bottom: 1em">
    <summary>Tip</summary>

    You may also want to start a new branch
    ```sh
    cd my-fullstack-collection
    npm i
    git checkout -b <branchname>
    npm run dev
    ```
  </details>

2. Load the seed data
  <details style="padding-left: 2em; padding-bottom: 1em">
    <summary>Running seeds</summary>
    ```sh
    npm run knex migrate:latest
    npm run knex seed:run
    ```
  </details>

3. Enjoy 😊

<details style="padding-left: 2em; padding-bottom: 1em">
  <summary>More about using <code>npm</code> vs <code>npx</code></summary>

  - When running knex, run `npm run knex <command>`, e.g. `npm run knex migrate:latest` rather than using `npx`
</details>

---


