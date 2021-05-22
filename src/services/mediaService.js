import { api } from "../api";
import * as auth from "../services/auth";

const service = {
  get: async (search, format, username) => {
    const {
      data: { data: media },
    } = await api.get("/media", { params: { search, format, username } });
    return media;
  },
  getOne: async (id) => {
    const {
      data: { data: media },
    } = await api.get(`/media/${id}`);
    return media;
  },
  upload: async (MediaResponse, tags) => {
    const mediaUrl = MediaResponse.data.url;
    const mediaFormat = MediaResponse.data.format;
    const cloudinaryId = MediaResponse.data.asset_id;

    const token = await auth.getCurrentUserToken();

    const { errorMessage, data: response } = await api.post(
      "/media",
      {
        format: mediaFormat,
        url: mediaUrl,
        thumbnailUrl: mediaUrl,
        cloudinaryId,
        tags,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (errorMessage || response.error) {
      return errorMessage || response.error;
    }
  },
};

export default service;
