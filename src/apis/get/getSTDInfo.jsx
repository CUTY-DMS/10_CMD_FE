import instance from "../axios";

export const getStudentList = async () => {
  return await instance.get(`/getSTDInfo`);
};
