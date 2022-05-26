export const rootUrls = {
  ROOT: process.env.REACT_APP_DOMAIN,
  AUTH: "auth",
};

export const urls = {
  // AUTH urls
  LOGIN: [rootUrls.ROOT, rootUrls.AUTH, "login"].join("/"),
  SIGNUP: [rootUrls.ROOT, rootUrls.AUTH, "signup"].join("/"),
  CHECK: [rootUrls.ROOT, rootUrls.AUTH, "check"].join("/"),
};
