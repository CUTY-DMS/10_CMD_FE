import instance from "axios";

export const getAdminInfo = async () => {
  return await instance.get(`/admin`);
}