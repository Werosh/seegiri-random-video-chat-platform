export type SeegiriErrorCode =
  | "UNKNOWN"
  | "NETWORK"
  | "VALIDATION"
  | "UNAUTHORIZED"
  | "NOT_FOUND";

export class SeegiriError extends Error {
  readonly code: SeegiriErrorCode;
  readonly status?: number;
  readonly cause?: unknown;

  constructor(
    message: string,
    options: { code: SeegiriErrorCode; status?: number; cause?: unknown } = {
      code: "UNKNOWN",
    },
  ) {
    super(message);
    this.name = "SeegiriError";
    this.code = options.code;
    this.status = options.status;
    this.cause = options.cause;
  }
}

export function isSeegiriError(error: unknown): error is SeegiriError {
  return error instanceof SeegiriError;
}

export function toUserFacingMessage(error: unknown): string {
  if (isSeegiriError(error)) return error.message;
  if (error instanceof Error) return error.message;
  return "Something went wrong. Please try again.";
}
