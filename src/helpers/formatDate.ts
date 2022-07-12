export const formatDate = (date: string) => {
  const myDate = new Date(date);
  const month = myDate.toLocaleString("default", { month: "long" });
  const day = myDate.toLocaleString("default", { day: "2-digit" });
  const td = `${month} ${day}`;

  return td;
};
