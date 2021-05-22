import mediaService from "../services/mediaService";

const controller = {
  get: ({ search, format, username } = {}) =>
    mediaService.get(search, format, username),
  getOne: ({ id } = {}) => mediaService.getOne(id),
};

export default controller;
