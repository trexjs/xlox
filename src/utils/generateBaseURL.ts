export function generateBaseURL(appName: string) {
  return process.env.NODE_ENV === "development"
    ? `http://${appName}.localhost:3000`
    : `https://${appName}.xlox.in`;
}
