import type { SearchRecord } from "./content";

export function searchRecords(records: SearchRecord[], query: string, type = "all"): SearchRecord[] {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return records
    .filter((record) => type === "all" || record.type === type)
    .map((record) => {
      const title = record.title.toLowerCase();
      const summary = record.summary.toLowerCase();
      const haystack = `${title} ${summary} ${record.body.toLowerCase()} ${record.tags.join(" ").toLowerCase()}`;
      const matches = terms.every((term) => haystack.includes(term));
      const score = terms.reduce((total, term) => total + (title.includes(term) ? 5 : 0) + (summary.includes(term) ? 2 : 0) + (haystack.includes(term) ? 1 : 0), 0);
      return { record, matches, score };
    })
    .filter(({ matches }) => terms.length === 0 || matches)
    .sort((a, b) => b.score - a.score || a.record.title.localeCompare(b.record.title))
    .map(({ record }) => record);
}
