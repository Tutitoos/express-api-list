import type { Request, Response } from "express";
import responseTime from "response-time";
import fontColor from "../utils/styles.js";

const getStatus = (code: number): string => {
  if (code >= 500) return `\x1b[${fontColor.red}m${code}\x1b[0m`;
  if (code >= 400) return `\x1b[${fontColor.yellow}m${code}\x1b[0m`;
  if (code >= 300) return `\x1b[${fontColor.cyan}m${code}\x1b[0m`;
  return `\x1b[${fontColor.green}m${code}\x1b[0m`;
};

const getMethod = (method: string): string => {
  switch (method) {
    case "POST":
      return `\x1b[${fontColor.blue}m${method}\x1b[0m`;
    case "PUT":
      return `\x1b[${fontColor.magneta}m${method}\x1b[0m`;
    case "DELETE":
      return `\x1b[${fontColor.red}m${method}\x1b[0m`;
    case "PATCH":
      return `\x1b[${fontColor.yellow}m${method}\x1b[0m`;
    case "GET":
    default:
      return `\x1b[${fontColor.green}m${method}\x1b[0m`;
  }
};

const middleware = responseTime(
  (request: Request, response: Response, time: number): void => {
    const { method: methodAction, url } = request;
    const { statusCode: statusCodeAction } = response;

    const statusCode = getStatus(statusCodeAction);
    const method = getMethod(methodAction);

    console.log(`${method} ${statusCode} ${url} ${time.toFixed(3)} ms`);
  }
);

export default middleware;
