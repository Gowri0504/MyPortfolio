// Resolves a file placed in /public against the deployed base path
// (e.g. "/MyPortfolio/") so images, resume and certificates work in
// both `vite dev` and on GitHub Pages.
export const asset = (file) => `${import.meta.env.BASE_URL}${file}`
