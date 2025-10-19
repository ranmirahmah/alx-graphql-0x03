import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query {
    charactersByIds(ids: [1, 2, 3, 4]) {
      id
      name
      status
      species
      type
      gender
    }
      query {
  page1: characters(page: 1) {
    results {
      id
      name
      status
      image
    }
  }
  page2: characters(page: 2) {
    results {
      id
      name
      status
      image
    }
  }
  page3: characters(page: 3) {
    results {
      id
      name
      status
      image
    }
  }
  page4: characters(page: 4) {
    results {
      id
      name
      status
      image
    }
  }
}

  }
`;
