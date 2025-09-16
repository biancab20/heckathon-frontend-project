This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Next.js + Prisma Postgres Example

![nextjs demo logos](https://github.com/user-attachments/assets/878d39b7-ca99-4dc5-a095-94ca9d010486)

This example demonstrates how to build a full-stack web application using [Next.js](https://nextjs.org/), [Prisma Client](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma), and [Prisma Postgres](https://www.prisma.io/postgres).

> **TL;DR:** Prisma Postgres is a new kind of Postgres database that's optimized for developer productivity. It offers instant provisioning, built-in connection pooling, edge caching, and seamless integration with Prisma ORM.
>
> [Learn more about Prisma Postgres →](https://www.prisma.io/postgres)

## Getting started

### 1. Fill out .env file

If you just want to run the app locally, rename `.env.example` to `.env` and fill in the values.

#### 1.1 Create a Prisma Postgres instance

Go to [the Console](https://console.prisma.io) and create a new Prisma Postgres instance. Use the `DATABASE_URL` value from the new instance to fill out the `.env` file.

#### 1.2 Create a GitHub OAuth app

Go to [the GitHub Developer Settings](https://github.com/settings/developers) and create a new OAuth app.

For the required fields:

- Application name and homepage URL can be whatever you want.
- Authorization callback URL should be `http://localhost:3000/api/auth/callback/github`

After creating the app, you'll be redirected to the app's page. Copy the `Client ID` and `Client Secret` values and use them to fill out `AUTH_GITHUB_ID` and `AUTH_GITHUB_SECRET` in the `.env` file.

#### 1.3 Fill out Auth.js secrets

Run `npx auth secret --copy` to generate a new `AUTH_SECRET` value. Fill out the `.env` file with the new value.

### 2. Install dependencies

Install npm dependencies:

```
npm install
```

### 3. Create and seed the database

Run the following command to create your database. This also creates the needed tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate dev --name init
```

When `npx prisma migrate dev` is executed against a newly created database, seeding is also triggered. The seed file in [`prisma/seed.ts`](./prisma/seed.ts) will be executed and your database will be populated with the sample data.

**If you switched to Prisma Postgres in the previous step**, you need to trigger seeding manually (because Prisma Postgres already created an empty database instance for you, so seeding isn't triggered):

```
npx prisma db seed
```

### 4. Start the Next.js server

```
npm run dev
```

The server is now running on `http://localhost:3000`.

<details>
<summary>📸 Expand for a tour of the app</summary>

### Homepage

Logged out view:
![Homepage](/public/logged-out-homepage.png)

Logged in view:
![Homepage](/public/logged-in-homepage.png)

### User Profile

![User Profile](/public/user-profile.png)

### Creating Posts

![Create Post](/public/create-post.png)

### View your posts and drafts

![View Posts](/public/view-posts.png)

</details>

## Next Steps

Here are some ways to learn more and expand upon this example:

1. 🚀 [Deploy your app to Vercel](https://vercel.com/docs/frameworks/nextjs) in just a few clicks
2. 📚 Learn more about [Prisma ORM](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma) and database workflows.
3. 🔍 Explore the [Prisma Client API](https://www.prisma.io/docs/orm/reference/prisma-client-reference) to add more database features.
4. ⭐ Check out more [Prisma examples](https://github.com/prisma/prisma-examples) for inspiration.

## Join our community!

- [Discord](https://pris.ly/discord)
- [Twitter](https://twitter.com/prisma)
- [Bluesky](https://bsky.app/profile/prisma.dev)
