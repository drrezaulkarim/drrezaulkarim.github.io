# Rezaul Karim's research homepage

A custom Jekyll homepage hosted on GitHub Pages. Existing project pages, including `/medvt/`, retain their URLs and layout.

## Local preview

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

Open `http://localhost:4000`. Build without serving with `bundle exec jekyll build`.
`sh script/cibuild` checks the site build. Dependencies target Jekyll 3.10 for compatibility with GitHub Pages.

## Updating content

- `_data/research.yml`: research themes, flagship results, supporting work, figures, and agent research vision.
- `_data/publications.yml`: publications, venues, author lists, categories, and links.
- `index.html`: hero, highlights, research cards, patents, condensed service, and contact.
- `assets/css/scientist.css`: responsive homepage styling.
- `_layouts/scientist.html`: homepage navigation and metadata. The original project layout is separate.

Publication dates are distinct from when research was conducted. Patent statuses should match public records; submissions are labeled separately from published applications and grants.

Keep performance metrics and their benchmark qualifiers aligned with the supplied papers. HTML TODO comments identify missing metrics, email details, employer disclosure confirmation, mentorship, and invited talks. No public placeholder links are used. Set `email` in `_config.yml` when the preferred public address is confirmed; the hero and contact links then render automatically.

Lucide icons are vendored in `assets/js/lucide.min.js` (version 0.468.0, ISC license). The homepage remains readable without JavaScript; JavaScript adds publication filtering and mobile navigation.
