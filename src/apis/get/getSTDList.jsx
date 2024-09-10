import instance from "../axios";

export const getSTDList = async () => {
  return await instance.get(`/getSTDList`);
};
