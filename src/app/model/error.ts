export class Error {
  hasError: boolean;
  message?: string;
  statusCode?: number;
  type?: string;
  constructor(hasError:boolean, message?: string, statusCode?: number, type?: string) {
    this.hasError = hasError;
    this.message = message;
    this.type = type;
    this.statusCode = statusCode;
  }
}
