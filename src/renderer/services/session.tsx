import { fakeApi } from '@/faker';

export const login = async (params: {
  email: string;
  password: string;
}): Promise<string> => {
  const response = await fakeApi.login({
    email: params.email,
    password: params.password,
  });

  return response;
};

export const logout = async () => {
  const response = 'test';

  return response;
};
