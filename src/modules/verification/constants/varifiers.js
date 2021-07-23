export const EMAIL_REGEX =
  /^(([^\s"(),.:;<>@[\]]+(\.[^\s"(),.:;<>@[\]]+)*)|(".+"))@(([^\s"(),.:;<>@[\]]+\.)+[^\s"(),.:;<>@[\]]{2,})$/i; // eslint-disable-line

export const NAME_REGEX = /^[ ',.A-z-]+$/;

export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[\dA-Za-z]{8,}$/;

export const PHONE_REGEX = /^\+?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4,6}$/;
