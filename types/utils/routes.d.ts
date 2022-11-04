import type { Express, Router } from "express";
import type { RouteStructur } from "./Config/types.js";
declare const getAllRoutes: (format: number, app: Express, router?: Router) => RouteStructur[];
export default getAllRoutes;
