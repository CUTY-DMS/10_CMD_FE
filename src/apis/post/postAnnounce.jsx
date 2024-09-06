import instance from "../axios";

export const postAnnc = async (data) => {
  return await instance.post(`/admin/notification`, data);
}