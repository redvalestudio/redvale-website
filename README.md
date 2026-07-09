# Red Vale Studio

A production-oriented Next.js 15 website for a premium digital product studio.

## Local development

1. Install Node.js 20.9 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add credentials as needed.
4. Run `npm run dev` and open `http://localhost:3000`.

The public site runs without third-party credentials in a development-friendly preview mode. Add Supabase and Resend credentials to persist submissions and deliver email.

## Supabase

1. Create a Supabase project.
2. Open SQL Editor and run `supabase/migrations/001_initial.sql`.
3. Copy the project URL, anonymous key, and service-role key into `.env.local`.
4. Never expose `SUPABASE_SERVICE_ROLE_KEY` in client-side variables.

All tables use RLS with no public policies. Server-side routes write using the service role.

## Resend

1. Create a Resend account and verify the sending domain.
2. Create an API key and set `RESEND_API_KEY`.
3. Set `RESEND_FROM_EMAIL` to a sender on the verified domain and `CONTACT_NOTIFICATION_EMAIL` to the studio inbox.

## Admin

Set strong values for `ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET`, then visit `/admin`. The dashboard cookie is HTTP-only, same-site strict, and expires after eight hours. For larger teams, replace the single-secret login with Supabase Auth and role-based access.

## Deploy to Vercel

Import the repository into Vercel, add the variables from `.env.example`, set `NEXT_PUBLIC_SITE_URL` to the production domain, and deploy. The included configuration selects Next.js automatically. Apply the SQL migration before accepting submissions.

## Structure

- `app/` — pages, route handlers, metadata, sitemap, and robots
- `components/` — interface and form components
- `lib/` — data, validation, database, and email utilities
- `supabase/migrations/` — database schema

## Operational notes

Remote editorial images use Unsplash and Next Image optimization. Replace them with commissioned work or final case-study media before launch. Booking slots are intentionally fixed; connect calendar availability before taking live calls.
