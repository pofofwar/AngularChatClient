export interface AuthData {
  message: string;
  user: {
    id: string;
    username: string;
  };
  token: string;
}
