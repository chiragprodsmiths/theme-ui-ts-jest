export const addBrandMutation = `
  mutation($name: String!, $description: String!) {
    addBrand(brandObj: { name: $name, description: $description }) {
      id
    }
  }
`;
