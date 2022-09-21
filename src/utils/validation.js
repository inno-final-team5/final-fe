export const checkEmail = (email) => {
  const emailRegex =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  return emailRegex.test(email);
};

export const checkUserName = (nickname) => {
  const nicknameRegEx = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,10}$/;
  return nicknameRegEx.test(nickname);
};

export const checkPassword = (password) => {
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.[0-9]){4,16}$/;

  let message = "";

  if (password.match(passwordRegEx) === null) {
    //형식에 맞지 않을 경우 아래 콘솔 출력
    message = "비밀번호 형식을 확인해주세요";
  } else {
    // 맞을 경우 출력
    message = "";
  }
  return message;
};
