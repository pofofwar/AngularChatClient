export interface AuthData {
  message: string;
  user: {
    id: string;
    username: string;
    password: string;
    __v?: string;
  };
  token: string;
}
