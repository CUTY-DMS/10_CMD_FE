import instance from "axios";

export const getNotiDetail = async (id) => {
  return await instance.get(`/notification/${id}`);
}