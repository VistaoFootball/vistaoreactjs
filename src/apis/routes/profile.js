import { api } from "apis";

const url = "/profile/users";

export const register = async (data) => {
  try {
    await api.post(`${url}/register`, data);
  } catch (err) {
    console.log(err);
  }
};

export const forgotPasswordLink = async (email) => {
  await api.post(`${url}/forgot-password-link`, { email });
};

export const changeUserPassword = async (auth_token, data) => {
  await api.post(`${url}/change-password`, data, {
    headers: { Authorization: `Token ${auth_token}` },
  });
};

// Set Function Paramaters and Pass it to API Call

// export const emailVerification = async () => {
//   await api.get(`${url}/email-verify`, {});
// };

// export const getResetPassword = async () => {
//   await api.get(`${url}/reset-password`, {});
// };

// export const postResetPassword = async () => {
//   await api.post(`${url}/reset-password`, {});
// };

// export const setPlayerTeamInfo = async () => {
//   await api.put(`${url}/player-team-info`, {});
// };

// export const getPlayerTeamInfo = async () => {
//   await api.get(`${url}/player-team-info`, {});
// };

// export const getProfileDetails = async () => {
//   await api.get(`${url}/profile-details`, {});
// };

// export const setProfileDetails = async () => {
//   await api.put(`${url}/profile-details`, {});
// };

// export const getScreenSettingsData = async () => {
//   await api.put(`${url}/get-screen-settings-data`, {});
// };

// export const setUserScreenSettings = async () => {
//   await api.put(`${url}/user-screen-settings`, {});
// };

// export const getUserScreenSettings = async () => {
//   await api.get(`${url}/user-screen-settings`, {});
// };

// export const getPlayerCommonCharacteristic = async () => {
//   await api.get(`${url}/player-common-characteristic`, {});
// };

// export const setPlayerCommonCharacteristic = async () => {
//   await api.put(`${url}/player-common-characteristic`, {});
// };

// export const getPlanTypes = async () => {
//   await api.get(`${url}/get-plan-types`, {});
// };

// export const createSubscriptionPlan = async () => {
//   await api.put(`${url}/create-subscription-plan`, {});
// };

// export const updateSubscriptionPlan = async () => {
//   await api.put(`${url}/update-subscription-plan`, {});
// };

// export const cancelSubscription = async () => {
//   await api.put(`${url}/cancel-subscription`, {});
// };
