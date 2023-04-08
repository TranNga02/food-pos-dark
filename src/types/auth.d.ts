declare namespace Auth {
  type HeaderInfo = {
    Accept: string;
    Authorization: string;
    'Content-Type': string;
  };

  type SignIn = {
    email: string;
    password: string;
    device_type: string;
    device_id: string;
    device_token: string;
  };

  type SignInResponse = {
    access_token: string;
    token_type: string;
  };

  type AccountInfo = {
    id: string;
    shop_id: string;
    name: string;
    email: string;
    email_verified_at: string;
    role: number;
    created_at: string;
    updated_at: string;
  };
}
