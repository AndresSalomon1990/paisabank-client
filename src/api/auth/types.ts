export interface LoginServicePostResponse {
  success: boolean;
  data: {
    name: string;
    token: string;
  };
}

export interface LoginServicePostParams {
  email: string;
  password: string;
}
