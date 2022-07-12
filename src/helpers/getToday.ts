export const getToday = (): string => {
  const date = new Date();
  const today = date.toISOString().split("T")[0];
  return today;
};
