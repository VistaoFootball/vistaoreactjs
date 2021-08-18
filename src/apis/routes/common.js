import { api } from "apis";

const url = "/common/users";

export const getCategories = async () => {
  const response = await api.get(`${url}/get-categories`);
  return response.data;
};

export const getSubCategories = async (user_category) => {
  const response = await api.get(
    `${url}/get-subcategories/${user_category}`,
    {}
  );
  return response.data;
};

export const getClubDetails = async (auth_token) => {
  const response = await api.get(`${url}/club-details`, {
    headers: { Authorization: `Token ${auth_token}` },
  });
  return response.data;
};

export const createClub = async (auth_token, name) => {
  await api.post(
    `${url}/club-details`,
    { name },
    {
      headers: { Authorization: `Token ${auth_token}` },
    }
  );
};

// Set Function Paramaters and Pass it to API Call

// export const getPostCategories = async () => {
//   await api.get(`${url}/get-post-categories`, {});
// };

// export const getPostSubCategories = async () => {
//   await api.get(`${url}/get-post-subcategories`, {});
// };

// export const getClipFilters = async () => {
//   await api.get(`${url}/get-clip-filters`, {});
// };

// export const getJerseyColours = async () => {
//   await api.get(`${url}/get-jersey-colours`, {});
// };

// export const getTeamNumbers = async () => {
//   await api.get(`${url}/get-team-numbers`, {});
// };

// export const postSummaryDetails = async () => {
//   await api.post(`${url}/summary-details`, {});
// };

// export const getSummaryDetails = async () => {
//   await api.get(`${url}/summary-details`, {});
// };
