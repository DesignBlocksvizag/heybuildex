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

apis 
Action	Method	URL	Notes
Get blogs	GET	https://heybuildex.com/blog-api/read.php	Returns all blog posts
Create blog	POST	https://heybuildex.com/blog-api/create.php	Requires multipart/form-data
Update blog	POST	https://heybuildex.com/blog-api/update.php	With optional image
Delete blog	POST	https://heybuildex.com/blog-api/delete.php	Requires only the id