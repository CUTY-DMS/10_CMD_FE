export const getWeekNumber = () => {
    const date = new Date();
    const currentDate = date.getDate();
    const startOfMonth = new Date(date.setDate(1));
    const weekDay = startOfMonth.getDay();
    return parseInt(((weekDay - 1) + currentDate) / 7) + 1;
  }
  
  //함수 출처 : https://gist.github.com/leegeunhyeok/8695aaf29674b098b7da7696e90810bb