import instance from "../axios";

export const patchAdminInfo = async (data) => {
  return await instance.patch(`/admin`, data);
}