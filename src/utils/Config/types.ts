export enum ConfigTypes {
  unknow,
  basic,
  advanced,
}

export interface ConfigStructur {
  mode: ConfigTypes;
  description: string;
  routes: RouteStructur[];
}

export type RouteStructur = string | RouteAdvancedStructur;

export interface RouteAdvancedStructur {
  route: string;
  type: string;
  description?: string;
}
