import type { Express } from "express";
interface AppExpress extends Express {
    app: {
        _router: {
            stack: Array<{
                route: Record<string, unknown>;
            }>;
        };
    };
}
export default AppExpress;
