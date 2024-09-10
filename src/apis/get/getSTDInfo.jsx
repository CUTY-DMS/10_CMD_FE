import instance from "../axios";

export const getSTDInfo = async () => {
  return await instance.get(`/getSTDInfo`);
};
