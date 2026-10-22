# HCI Methods Studio

**Binyan Xu · HCI × creative technology × health**

An independent, English-language teaching hub for research through making, embodied interaction, and health. The core follows all 15 positions of Le Dantec’s Fall 2026 reference syllabus, with separately identified extensions for creative technology, embodied interaction, and health.

Live site: https://sharkburger.github.io/hci-methods-studio/

## Included

- Fifteen source-calendar positions in their original order, including breaks, poster session, and final project.
- All 74 bibliographic/resource entries grouped as READ, STRETCH, and DO in their source order.
- Twelve original embedded reading links, plus the two URLs printed as text, and the other original article/footer destinations.
- Newly authored method explanations: approach, outputs, limits, and a connection to Binyan’s interests.
- Six extension routes and eighteen additional references, including four personal research works.
- Search by title/author/topic, origin/method/week filters, expandable weeks, and deep links.
- Reference assessment and policy context, original teaching aids, and a complete text version.

See [COURSE.md](COURSE.md), [SOURCE_LINKS.md](SOURCE_LINKS.md), and [SOURCES.md](SOURCES.md). Source citations without a verified direct link use clearly marked Crossref publication lookups. Lookup links are discovery searches, not verified full texts.

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

The dates, guests, and milestones describe the reference course, not an announced offering here. Add meeting dates, contact details, office hours, submission channels, and institution-specific policies. Define assessment and AI policy for the offering; source policies are explicitly labelled. Personal-work discussion questions are prompts based on verified bibliographic records, not substitutes for reading the full papers. All source reading entries have been catalogued; this does not mean every book or paper has been read in full. No clinical effectiveness is asserted.

## Contributions

Use issues for corrections and suggestions. Include the source and reason for a reference correction. Avoid publishing participant records, sensitive health information, or material you do not have permission to share.

## Rights

Code is MIT licensed. Original teaching prose and annotations are CC BY 4.0. Third-party papers are linked, not redistributed, and retain their own rights. See [LICENSE](LICENSE), [CONTENT-LICENSE.md](CONTENT-LICENSE.md), and [SOURCES.md](SOURCES.md).
