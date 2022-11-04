import type { Express, Request, Response, Router } from "express";
import getAllRoutes from "../utils/routes.js";

const getHelpApi =
  (app: Express, router?: Router) => (request: Request, response: Response) => {
    const routes = getAllRoutes(app, router);

    response.status(200).json({
      message: "This is a list of all the api endpoints.",
      routes,
    });
  };

export default getHelpApi;
