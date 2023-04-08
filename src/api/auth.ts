import router from '@/router';
import { httpRequest } from './http-request';

export const signIn = async (params: Auth.SignIn): Promise<void> => {
  const SignInResponse: Auth.SignInResponse = await httpRequest.post('/guest/login', params);
  sessionStorage.setItem('token', SignInResponse.access_token);
  router.push('/');
};

export const logOut = async (): Promise<void> => {
  await httpRequest.delete('/account/logout');
  sessionStorage.clear();
  router.push('/sign-in');
};

export const getAccountInfo = async (): Promise<Auth.AccountInfo> => {
  const accountInfo: Auth.AccountInfo = await httpRequest.get('/account/profile');
  sessionStorage.setItem('shop_id', accountInfo.shop_id);
  return accountInfo;
};
