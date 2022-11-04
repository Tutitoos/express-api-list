import type { Express, Request, Response, Router } from "express";
declare const getHelpApi: (app: Express, router?: Router) => (request: Request, response: Response) => void;
export default getHelpApi;
