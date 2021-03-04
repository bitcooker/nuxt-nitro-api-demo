import { useQuery } from "h3";

export default (req) => {
  return {
    message: "hi",

    request: {
      url: req.url,
      method: req.method,
      query: useQuery(req),
    },
  };
};
