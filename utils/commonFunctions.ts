export const convertDateToString = (dt: Date): string => {
  const year = dt.getFullYear();
  const month = ("00" + (dt.getMonth()+1)).slice(-2);
  const date = ("00" + dt.getDate()).slice(-2);
  return `${year}/${month}/${date}`;
}