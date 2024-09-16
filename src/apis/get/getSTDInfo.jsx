import instance from "../axios";

export const getSTDInfo = async (id) => {
  return await instance.get(`/student/${id}`);
};
