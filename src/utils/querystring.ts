const parse = (queries: string) => {
  const string = queries
    ? `{"${decodeURI(queries)
        .replace('?', '')
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')}"}`
    : '{}';

  return JSON.parse(string);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getQuery = (payload: { [key: string]: string | number | undefined | null }) => {
  const query = new URLSearchParams();

  Object.entries(payload).forEach(([k, v]) => {
    if (v !== undefined && v !== null) query.append(k, v.toString());
  });

  return `?${query.toString()}`;
};

export default {
  parse,
  getQuery,
};
