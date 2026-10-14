# Colorado PIA Website

Marketing site for Colorado PIA, a security services company providing protection solutions for schools, religious institutions, workplaces, and high-profile individuals across Colorado.

Built with [Nuxt 3](https://nuxt.com) and deployed to Cloudflare Pages.

## Tech Stack

- **Framework:** Nuxt 3 (v4 compatibility mode, `app/` directory) + TypeScript
- **UI:** [Nuxt UI Pro](https://ui.nuxt.com/pro) + Tailwind CSS (dark mode by default, amber/slate theme)
- **Content:** [Nuxt Content](https://content.nuxt.com) — page copy lives in YAML files under `content/`
- **Contact form:** [Web3Forms](https://web3forms.com) for email delivery, protected by [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/)
- **Hosting:** Cloudflare Pages (`nitro.preset: "cloudflare_pages"`)
- **Package manager:** pnpm

## Project Structure

```
app/
  components/        # Vue components (header, footer, contact form, home sections)
  data/navigation.ts # Header nav links
  layouts/           # Page layouts
  pages/             # index.vue, consultation.vue, services/[slug].vue
  schemas/           # Zod schema for the contact form
content/
  index.yml          # Homepage hero, services, testimonials
  contact.yml        # Contact section copy
  forms/             # Contact form labels/errors/success messages
  services/          # One YAML file per service page (drives /services/[slug])
server/
  api/verify-turnstile.ts  # Server-side Turnstile token verification
public/              # Static assets (images)
types/               # Shared TypeScript types
```

## Setup

Install dependencies:

```bash
pnpm install
```

Create a `.env` file with the required keys:

```bash
# Web3Forms access keys (contact form recipients)
WEB3FORMS_ACCESS_KEY_NICK=
WEB3FORMS_ACCESS_KEY_WILL=

# Cloudflare Turnstile
TURNSTILE_SITEKEY=
TURNSTILE_SECRET_KEY=

# Optional: Turnstile test keys for local development
TURNSTILE_SECRET_KEY_TESTING=
TURNSTILE_SITE_KEY_TESTING=
```

## Development

Start the dev server on `http://localhost:3000` (binds to `0.0.0.0`, so it's reachable on your LAN):

```bash
pnpm dev
```

## Production

```bash
pnpm build      # build for Cloudflare Pages
pnpm generate   # static generation
pnpm preview    # preview the production build locally
```

## Editing Content

Most page copy is content-driven — no component changes needed:

- **Homepage** (hero words, service cards, testimonials): `content/index.yml`
- **Service pages**: add/edit a YAML file in `content/services/`; the slug comes from the filename
- **Contact form labels and messages**: `content/forms/contactform.yml`
- **Navigation**: `app/data/navigation.ts`

## Contact Form Flow

1. `ContactForm.vue` renders the form and a `NuxtTurnstile` widget.
2. On submit, the Turnstile token is sent to `/api/verify-turnstile`, which validates it against Cloudflare's `siteverify` endpoint using the secret key.
3. On success, the form data is posted to the Web3Forms API (`WEB3FORMS_ACCESS_KEY_*` selects the recipient).
