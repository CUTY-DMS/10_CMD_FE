import instance from "axios";

export const deleteAnnc = async (id) => {
  return await instance.delete(`/admin/notification/${id}`);
}