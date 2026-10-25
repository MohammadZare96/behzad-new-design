# Behzad Ahi — personal page

Static site: no build step. Open `index.html` or upload the folder as is.

## Updating content

Almost everything lives in `assets/data.js`:

- `publications.journal` / `publications.conference` — oldest first; the page shows newest first and numbers them J1…, C1….
  Add `"award": "Best Paper Award"` to show a badge.
- `students.phd` / `students.msc` / `students.bsc` — `summary` is shown in the pop-up; leave it `""` for an empty summary.
  Photos go in `assets/img/people/`.
- `courses`, `research`, `timeline`, `links`.

The bio, contact details and hero text are in `index.html`.
