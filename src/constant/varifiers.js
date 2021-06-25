export const VARIFIERS_EMAIL =
    /^(([^\s"(),.:;<>@[\]]+(\.[^\s"(),.:;<>@[\]]+)*)|(".+"))@(([^\s"(),.:;<>@[\]]+\.)+[^\s"(),.:;<>@[\]]{2,})$/i; // eslint-disable-line

export const VARIFIERS_NAME =
    /^(?=[.A-Z_a-z]{1,20}$)(?!.*[._]{2})[^._].*[^._]$/;
export const VARIFIERS_PASSWORD =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\dA-Za-z]{8,}$/;

export const VARIFIERS_PHONE = /^\+?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4,6}$/;
