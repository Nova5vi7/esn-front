export const EMAIL_REGEX =
  /^(([^\s"(),.:;<>@[\]]+(\.[^\s"(),.:;<>@[\]]+)*)|(".+"))@(([^\s"(),.:;<>@[\]]+\.)+[^\s"(),.:;<>@[\]]{2,})$/i; // eslint-disable-line

export const NAME_REGEX = /^(?=[.A-Z_a-z]{1,20}$)(?!.*[._]{2})[^._].*[^._]$/;

export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\dA-Za-z]{8,}$/;

export const PHONE_REGEX = /^\+?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4,6}$/;
