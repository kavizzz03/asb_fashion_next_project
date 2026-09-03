# ASB Fashion — Beyond Tradition

Official website for ASB Fashion, Sri Lanka's clothing retailer since 1989.
Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build
npm start
```

## Pages

- `/` — Home (hero slideshow, brand story preview, collections, branch teaser, CTA)
- `/about` — About Us (story, timeline, values)
- `/branches` — Our Branches (searchable, filterable directory of all 16 stores)
- `/contact` — Contact (contact methods, form, map)

## Replacing the placeholder photography

Every photo on the site is currently a generated placeholder (a maroon/ink
gradient labelled with the expected filename) so the site runs and looks
complete out of the box. Replace the files below in `public/images/` with
your real photography, **keeping the same filenames** — nothing else needs
to change:

| Filename | Used for |
|---|---|
| `hero-1.jpg` … `hero-4.jpg` | Homepage slideshow (1920×1080 recommended) |
| `about-1.jpg` | About preview photo, home + about pages (portrait, 4:5) |
| `about-2.jpg` | About page hero background |
| `collection-1.jpg` … `collection-4.jpg` | Homepage collections grid |
| `branches-hero.jpg` | Branches page header background |
| `contact-hero.jpg` | Contact page header background |
| `logo-mark.png` | Not currently used in markup — the header/footer use a text-based "ASB" mark by default. Swap in an `<Image>` if you have a real logo file. |

## Editing branch, contact, and brand info

All copy that repeats across the site — phone number, email, Facebook link,
founding year, branch count, and the developer credit — lives in one place:

```
lib/branches.ts
```

The full list of 16 branches (name, address, hours, province, Google Maps
link) is also in that file. Add, remove, or edit branches there and both the
`/branches` page and homepage teaser update automatically.

## Contact form

The form on `/contact` validates input and shows a success state, but is not
wired to a backend yet. To make it functional, replace the `handleSubmit`
logic in `components/ContactForm.tsx` with a call to your email service or a
Next.js API route (e.g. `app/api/contact/route.ts`).

## Fonts

The site uses Google Fonts (`Fraunces` for display type, `Inter` for body
text) loaded via `next/font/google`, so no manual font setup is needed —
just make sure the machine building the site has normal internet access.

## Credits

Designed & developed by **Vexel IT** · Lead **Kavizz** · [vexelit.xyz](https://vexelit.xyz)
