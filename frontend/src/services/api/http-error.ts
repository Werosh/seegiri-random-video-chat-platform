export type HttpErrorDetails = {
  message: string;
  status: number;
  url: string;
  body?: string;
};

export class HttpError extends Error {
  readonly status: number;
  readonly url: string;
  readonly body?: string;

  constructor(details: HttpErrorDetails) {
    super(details.message);
    this.name = "HttpError";
    this.status = details.status;
    this.url = details.url;
    this.body = details.body;
  }
}

export function isHttpError(error: unknown): error is HttpError {
  return error instanceof HttpError;
}
