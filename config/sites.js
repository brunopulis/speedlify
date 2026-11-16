/**
 * The starting configuration for a new instance.
 *
 * `npm run reset` copies this over `config/sites.js`, which is the file the
 * measurement and report steps actually read. Edit that one; this stays as the
 * thing to fall back to.
 *
 * Everything below is the smallest configuration that runs. The upstream
 * project's own config carries several hundred more lines — imported community
 * lists, pinned URLs, archived sites, per-category politeness — none of which
 * mean anything outside that instance. Add what you need as you need it; the
 * defaults here are chosen so that measuring three sites works on the first
 * `npm run measure` without touching anything else.
 */

export default {
  runs: 3,
  formFactor: "mobile",
  freshnessHours: 24,
  staleAfterHours: 48,
  batchSize: 20,
  groups: {
    pessoal: {
      name: "Bruno Pulis",
      enabled: true,
      sites: [{ name: "Bruno Pulis", url: "https://brunopulis.com/" }],
    },
  },
};
