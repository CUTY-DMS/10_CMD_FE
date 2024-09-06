import instance from "axios";

export const getNotiList = async () => {
  return await instance.get(`notification/list`);
}