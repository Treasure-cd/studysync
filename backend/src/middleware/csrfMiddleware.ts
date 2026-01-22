import { Request, Response, NextFunction } from "express";

export const csrfProtection = (req: Request, res: Response, next: NextFunction) => {
    
  const csrfCookie = req.cookies.csrf;
  const csrfHeader = req.headers["x-csrf-token"];

  if (!csrfCookie || !csrfHeader || csrfCookie !== csrfHeader) {
    return res.status(403).json({ error: "CSRF blocked" });
  }

  next();
};