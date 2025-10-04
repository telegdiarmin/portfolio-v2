export const getClasses = (arr: string[]): string => {
  return arr.filter(Boolean).join(" ");
};
