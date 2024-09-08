export const getEndDate = () => {
    const date = new Date();
    const endDate = new Date(`${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2, "0")}`);
    endDate.setDate(0);
    return(endDate.getDate());
  }