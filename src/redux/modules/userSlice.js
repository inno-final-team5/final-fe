// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   users: [],
//   error: null,
//   isLoading: false,
//   isSuccess: false,
// };
// //login
// export const loginUserDB = (payload) => {
//   //   return async function () {
//   //     await axios
//   //       .post('/member/login', payload)
//   //       .then((response) => {
//   //         if (response.data.success === false) {
//   //           return window.alert(response.data.error.message);
//   //         } else {
//   //           const accessToken = response.headers.authorization.split(' ')[1];
//   //           return (
//   //             localStorage.setItem('token', response.headers.authorization),
//   //             localStorage.setItem('freshToken', response.headers['refresh-token']),
//   //             localStorage.setItem('id', response.data.data.nickname),
//   //             alert(`${localStorage.id}님 로그인 성공!`),
//   //             (document.location.href = '/')
//   //           );
//   //         }
//   //       })
//   //       .catch((response) => {
//   //         console.log(response);
//   //       });
//   //   };
// };

// export const userSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {},
//   extraReducers: {},
// });
// export default userSlice.reducer;
