import type { Express, Request, Response, Router } from "express";
import Config from "../utils/Config/Config.js";
declare const getHelpApi: (configData: (config: Config) => Config, app: Express, router?: Router) => (request: Request, response: Response) => void;
export default getHelpApi;
