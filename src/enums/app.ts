export enum StatusCode {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  TooManyRequests = 429,
  ValidationFailed = 422,
  InternalServerError = 500,
}

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
}

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
  TEXTAREA = 'textarea',
}
