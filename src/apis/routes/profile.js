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

export const resetPassword = async (data) => {
  await api.post(`${url}/reset-password`, data);
};

export const getProfileDetails = async (auth_token) => {
  const response = await api.get(`${url}/profile-details`, {
    headers: { Authorization: `Token ${auth_token}` },
  });
  return response.data;
};

export const setProfileDetails = async (auth_token, data) => {
  await api.put(`${url}/profile-details`, data, {
    headers: {
      Authorization: `Token ${auth_token}`,
    },
  });
};

export const setPlayerTeamInfo = async (auth_token, data) => {
  await api.put(`${url}/player-team-info`, data, {
    headers: { Authorization: `Token ${auth_token}` },
  });
};

export const getPlayerTeamInfo = async (auth_token) => {
  const response = await api.get(`${url}/player-team-info`, {
    headers: { Authorization: `Token ${auth_token}` },
  });
  return response.data;
};

export const getScreenSettingsData = async (auth_token) => {
  const response = await api.get(`${url}/get-screen-settings-data`, {
    headers: { Authorization: `Token ${auth_token}` },
  });
  return response.data;
};

export const setUserScreenSettings = async (auth_token, data) => {
  await api.put(`${url}/user-screen-settings`, data, {
    headers: { Authorization: `Token ${auth_token}` },
  });
};

export const getUserScreenSettings = async (auth_token) => {
  const response = await api.get(`${url}/user-screen-settings`, {
    headers: { Authorization: `Token ${auth_token}` },
  });
  return response.data;
};

export const getPlayerCommonCharacteristic = async (auth_token) => {
  const response = await api.get(`${url}/player-common-characteristic`, {
    headers: { Authorization: `Token ${auth_token}` },
  });
  return response.data;
};

export const setPlayerCommonCharacteristic = async (auth_token, data) => {
  await api.put(`${url}/player-common-characteristic`, data, {
    headers: { Authorization: `Token ${auth_token}` },
  });
};

export const createSubscriptionPlan = async (auth_token, data) => {
  const response = await api.post(`${url}/create-subscription-plan`, data, {
    headers: { Authorization: `Token ${auth_token}` },
  });
  return response.data;
};

export const getSubscriptionStatus = async (auth_token) => {
  const response = await api.get(`${url}/get-subscription-status `, {
    headers: { Authorization: `Token ${auth_token}` },
  });
  return response.data;
};

// Set Function Paramaters and Pass it to API Call

// export const emailVerification = async () => {
//   await api.get(`${url}/email-verify`, {});
// };

// export const getResetPassword = async () => {
//   await api.get(`${url}/reset-password`, {});
// };

// export const getPlanTypes = async () => {
//   await api.get(`${url}/get-plan-types`, {});
// };

// export const updateSubscriptionPlan = async () => {
//   await api.put(`${url}/update-subscription-plan`, {});
// };

// export const cancelSubscription = async () => {
//   await api.put(`${url}/cancel-subscription`, {});
// };
