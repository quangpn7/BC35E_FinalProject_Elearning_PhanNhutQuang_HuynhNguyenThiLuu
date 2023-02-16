import { InputRule } from "../../../interfaces/others/ValidationRuleType";

export const userNameRule: InputRule = {
  regex: /^[a-zA-Z0-9]+$/,
  errorRegex: "Username must not contain special character",
};
export const passwordRule = {
  min: 8,
  max: 16,
  errorLen: "*Password should be more than 8 and less than 16 character",
  regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)/,
  errorRegex:
    "*Password must contain at least 1 special character, number, uppercase and lowercase",
};

export const nameRule = {
  // Uppercase at each word, accept English and Vietnamese name
  regex:
    "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
    "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
    "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$",
  errorRegex: "*Name must uppercase at each word and no special char, number",
};

export const phoneRule = {
  min: 6,
  max: 15,
  regex: /^[0-9]+$/,
  error: "*Phone is not valid",
};
