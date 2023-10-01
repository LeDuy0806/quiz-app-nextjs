export const EmailFormat = (value: string) => {
  var email =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (value === "") {
    return null;
  }
  if (email.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const RequirePassword = (value: string) => {
  var password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
  if (!value) {
    return null;
  } else {
    if (password.test(value)) {
      return "strong";
    } else {
      if (value.length < 8) {
        return "weak";
      } else {
        return "medium";
      }
    }
  }
};

export const RequireShort = (value: string) => {
  if (!value) {
    return null;
  } else {
    if (/[0-9]/.test(value) || value.length > 5 || value.length < 2) {
      return "weak";
    } else {
      return "strong";
    }
  }
};

export const RequireLong = (value: string) => {
  if (!value) {
    return null;
  } else {
    if (value.length > 15 || value.length < 5) {
      return "weak";
    } else {
      return "strong";
    }
  }
};
