import {IncomingMessage, ServerResponse} from "http";
import {NextFunction, Request, Response} from "express";

export const verifyRequest = (req: IncomingMessage, res: ServerResponse, buf: Buffer, encoding: string) => {
    // Can abort JSON parsing here by throwing an error

    // We might for example want to check for particular encodings
    // or other indicators that the request is not related to the
    // front-end application, just to save processing requests that
    // we don't care about

    return true;
}

export const verifyJSON = (req: Request, res: Response, next: NextFunction) => {
    next();
}