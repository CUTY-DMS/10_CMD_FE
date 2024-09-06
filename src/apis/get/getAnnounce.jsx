// import axios from "axios";

// export const getAnnounce = async (announcementId) => {
//   try {
//     const response = await axios.get(
//       `http://52.65.160.119:8080/notification/${announcementId}`
//     );

//     if (response.status === 200) {
//       return response.data;
//     } else {
//       throw new Error("Failed to fetch announcement");
//     }
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       throw new Error("Announcement not found");
//     } else {
//       throw error;
//     }
//   }
// };

import instance from "../axios";

export const announceDetail = async (id) => {
  return await instance.get(`/notification/${id}`);
};
