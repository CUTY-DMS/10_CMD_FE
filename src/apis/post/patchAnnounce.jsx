import instance from "../axios";

export const patchAnnc = async (data, id) => {
  return await instance.patch(`/admin/notification/${id}`, data);
}