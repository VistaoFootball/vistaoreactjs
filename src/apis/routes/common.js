import { api } from "apis";

const url = "/common/users";

// Set Function Paramaters and Pass it to API Call
export const getCategories = async () => {
  await api.get(`${url}/get-categories`, {});
};

export const getSubCategories = async () => {
  await api.get(`${url}/get-subcategories`, {});
};

export const getPostCategories = async () => {
  await api.get(`${url}/get-post-categories`, {});
};

export const getPostSubCategories = async () => {
  await api.get(`${url}/get-post-subcategories`, {});
};

export const getClipFilters = async () => {
  await api.get(`${url}/get-clip-filters`, {});
};

export const getClubDetails = async () => {
  await api.get(`${url}/club-details`, {});
};

export const postClubDetails = async () => {
  await api.post(`${url}/club-details`, {});
};

export const getJerseyColours = async () => {
  await api.get(`${url}/get-jersey-colours`, {});
};

export const getTeamNumbers = async () => {
  await api.get(`${url}/get-team-numbers`, {});
};

export const postSummaryDetails = async () => {
  await api.post(`${url}/summary-details`, {});
};

export const getSummaryDetails = async () => {
  await api.get(`${url}/summary-details`, {});
};
