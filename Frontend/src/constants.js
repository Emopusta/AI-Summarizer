const basePort = (import.meta.env.VITE_PORT ? import.meta.env.VITE_PORT : 8000)

export const BASE_URL = `http://localhost:${basePort}`;
export const AUTH_URL = "/api/auth";

