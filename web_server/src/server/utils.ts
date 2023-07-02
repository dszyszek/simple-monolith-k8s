type Header = {
  name: string;
  value: string;
};

const HEADERS: Header[] = [
  { name: "Access-Control-Allow-Origin", value: "*" },
  {
    name: "Access-Control-Allow-Methods",
    value: "GET,HEAD,OPTIONS,POST,PUT,DELETE",
  },
  {
    name: "Access-Control-Allow-Headers",
    value:
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-auth",
  },
];

export const setHeaders = (req: any, res: any, next: any) => {
  HEADERS.forEach(({ name, value }) => {
    res.header(name, value);
  });
  next();
};

export const isProduction = () => {
  const currentEnv = process.env.NODE_ENV;
  return currentEnv === "production";
};
