export const VARIFIERS_EMAIL = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;//Ro = true; Ro1 = false

export const VARIFIERS_NAME = /^(?=[a-zA-Z._]{1,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;//test@robot.ru = true; test@robot-ru = false

export const VARIFIERS_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;//Keni123men = true; Keni123 = false.