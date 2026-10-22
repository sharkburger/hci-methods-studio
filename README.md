# HCI Methods Studio

**Binyan Xu · HCI × creative technology × health**

An independent, English-language teaching hub for research through making, embodied interaction, and health. The proposed 12-week sequence connects reading, discussion, studio practice, and reflection.

Live site: https://sharkburger.github.io/hci-methods-studio/

## Included

- Twelve expandable weekly sessions, each with a learning aim, activity, readings, and deliverable.
- Twelve annotated references, including four personal research works selected from Binyan Xu’s public ORCID record.
- Reading search and method filters, with deep links from weekly sessions and research threads.
- A teaching model, proposed assessment, access and ethics guidance, and a draft AI policy.
- Downloadable reading-note and research-proposal templates.
- A complete text version in [COURSE.md](COURSE.md) and provenance in [SOURCES.md](SOURCES.md).

## Run locally

No build tools or dependencies are needed. From this directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. You may also open `index.html` directly.

## Edit

- `assets/content.js`: weekly sequence, reference metadata, teaching questions, and practice prompts.
- `index.html`: course introduction, research threads, teaching practice, policies, and external resources.
- `assets/style.css`: responsive design and print styles.
- `assets/app.js`: weekly panels, search, filters, and reading deep links.
- `templates/`: editable Markdown handouts.

The site uses relative asset paths and works under a GitHub Pages project URL. In repository Settings → Pages, select **Deploy from a branch**, **main**, **/ (root)**, and save. `.nojekyll` bypasses Jekyll processing. GitHub rebuilds the site after changes to the selected branch.

## Before running a course

The schedule is a proposed sequence, not an announced offering. Add meeting dates, contact details, office hours, submission channels, and institution-specific policies. Review assessment and AI policy. Personal-work discussion questions are prompts based on verified bibliographic records, not substitutes for reading the full papers. No clinical effectiveness is asserted.

## Contributions

Use issues for corrections and suggestions. Include the source and reason for a reference correction. Avoid publishing participant records, sensitive health information, or material you do not have permission to share.

## Rights

Code is MIT licensed. Original teaching prose and annotations are CC BY 4.0. Third-party papers are linked, not redistributed, and retain their own rights. See [LICENSE](LICENSE), [CONTENT-LICENSE.md](CONTENT-LICENSE.md), and [SOURCES.md](SOURCES.md).
