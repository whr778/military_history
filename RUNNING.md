# Running the App

This project is a Next.js app for the Military History reading list.

## Requirements

- Node.js
- npm

The app was last built locally with Node `v26.3.0` and npm `11.16.0`.

## Install Dependencies

```bash
npm install
```

## Start the Development Server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Build for Production

```bash
npm run build
```

## Run the Production Build

After building, start the production server:

```bash
npm run start
```

By default, the app will be available at:

```text
http://localhost:3000
```

## Useful Notes

- Book data lives in `lib/books.ts`.
- The home page is `app/page.tsx`.
- Individual summary pages are generated from `app/books/[slug]/page.tsx`.
- Amazon and Audible links are generated as search links from each book title.
- `npm install` may report moderate audit findings depending on the current dependency tree. Review with `npm audit` before applying automated fixes, especially `npm audit fix --force`.
