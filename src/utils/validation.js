export const checkEmail = (email) => {
  const emailRegex =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  return emailRegex.test(email);
};

export const checkUserName = (nickname) => {
  const nicknameRegEx = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{1,10}$/;
  return nicknameRegEx.test(nickname);
};

export const checkPassword = (password) => {
  const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,16}$/;
  return passwordRegEx.test(password);
};
