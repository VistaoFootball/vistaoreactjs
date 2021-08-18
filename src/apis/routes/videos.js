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

// Set Function Paramaters and Pass it to API Call

// export const getVideoFiles = async () => {
//   await api.get(`${url}/video-files`, {});
// };

// export const updateVideoProfile = async () => {
//   await api.put(`${url}/update-video-profile`, {});
// };

// export const postCreateVideoClip = async () => {
//   await api.post(`${url}/create-video-clip`, {});
// };

// export const putCreateVideoClip = async () => {
//   await api.put(`${url}/create-video-clip`, {});
// };

// export const searchVideoClip = async () => {
//   await api.post(`${url}/search-video-clip`, {});
// };

// export const getVideoClips = async () => {
//   await api.get(`${url}/get-video-clips`, {});
// };

// export const deleteVideoClip = async () => {
//   await api.get(`${url}/delete-video-clip`, {});
// };
// export const deleteVideoProfile = async () => {
//   await api.get(`${url}/delete-video-profile`, {});
// };

// export const getVideoClipStatistics = async () => {
//   await api.get(`${url}/get-video-clip-statistics`, {});
// };

// export const postSummary = async () => {
//   await api.post(`${url}/summary`, {});
// };

// export const getSummary = async () => {
//   await api.get(`${url}/summary`, {});
// };

// export const setSummary = async () => {
//   await api.put(`${url}/summary`, {});
// };

// export const deleteSummary = async () => {
//   await api.get(`${url}/delete-summary`, {});
// };

// export const getGallerySummary = async () => {
//   await api.get(`${url}/gallery-summary`, {});
// };
