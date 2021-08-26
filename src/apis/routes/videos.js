import { api } from "apis";

const url = "/videos/users";

export const getVideoGallery = async (auth_token) => {
  const response = await api.get(`${url}/get-video-gallery`, {
    headers: { Authorization: `Token ${auth_token}` },
  });
  return response.data.video_gallery;
};

export const createVideoFiles = async (auth_token, data) => {
  await api.post(`${url}/video-files`, data, {
    headers: { Authorization: `Token ${auth_token}` },
  });
};

export const getClubUsers = async (auth_token, id) => {
  const response = await api.get(`${url}/get-club-users/${id}`, {
    headers: { Authorization: `Token ${auth_token}` },
  });
  return response.data;
};

export const deleteVideoProfile = async (auth_token, id) => {
  await api.get(`${url}/delete-video-profile/${id}`, {
    headers: { Authorization: `Token ${auth_token}` },
  });
};

export const getGallerySummary = async (auth_token) => {
  const response = await api.get(`${url}/gallery-summary`, {
    headers: { Authorization: `Token ${auth_token}` },
  });
  return response.data;
};

export const createVideoClip = async (auth_token, data) => {
  await api.post(`${url}/create-video-clip`, data, {
    headers: { Authorization: `Token ${auth_token}` },
  });
};

export const getVideoClips = async (auth_token, video_id) => {
  const response = await api.get(`${url}/get-video-clips/${video_id}`, {
    headers: { Authorization: `Token ${auth_token}` },
  });
  return response.data;
};

export const getVideoFiles = async (auth_token) => {
  const response = await api.get(`${url}/video-files`, {
    headers: { Authorization: `Token ${auth_token}` },
  });
  return response.data;
};

export const deleteVideoClip = async (auth_token, video_id) => {
  await api.get(`${url}/delete-video-clip/${video_id}`, {
    headers: { Authorization: `Token ${auth_token}` },
  });
};

export const updateVideoClip = async (auth_token, data) => {
  console.log(data);
  await api.put(`${url}/create-video-clip`, data, {
    headers: { Authorization: `Token ${auth_token}` },
  });
};

export const getSummary = async (auth_token) => {
  const response = await api.get(`${url}/summary`, {
    headers: { Authorization: `Token ${auth_token}` },
  });
  return response.data;
};

export const createSummary = async (auth_token, data) => {
  await api.post(`${url}/summary`, data, {
    headers: { Authorization: `Token ${auth_token}` },
  });
};

// Set Function Paramaters and Pass it to API Call

// export const updateVideoProfile = async () => {
//   await api.put(`${url}/update-video-profile`, {});
// };

// export const searchVideoClip = async () => {
//   await api.post(`${url}/search-video-clip`, {});
// };

// export const getVideoClipStatistics = async () => {
//   await api.get(`${url}/get-video-clip-statistics`, {});
// };

// export const setSummary = async () => {
//   await api.put(`${url}/summary`, {});
// };

// export const deleteSummary = async () => {
//   await api.get(`${url}/delete-summary`, {});
// };
