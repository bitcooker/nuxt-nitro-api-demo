import { useQuery } from "h3";

export default (req) => {
  return {
    message: "hi",

    request: {
      url: req.url,
      method: req.method,
      headers: req.headers,
      trailers: req.trailers,
      query: useQuery(req),
    },
  };
};
