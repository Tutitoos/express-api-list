import type { Express, Router } from "express";
declare const getAllRoutes: (app: Express, router?: Router) => string[];
export default getAllRoutes;
