export const loginQuery = `
  mutation($userName: String!, $password: String!) {
    login(username: $userName, password: $password) {
      token
    }
  }
`;
