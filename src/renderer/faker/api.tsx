const login = (params: { email: string; password: string }): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 2000);
  });

export { login };
