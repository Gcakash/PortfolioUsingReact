export const getExperience = (startDate) => {
  const start = new Date(startDate);
  const today = new Date();

  let years = today.getFullYear() - start.getFullYear();
  let months = today.getMonth() - start.getMonth();

  if (today.getDate() < start.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const decimalYears = years + months / 12;

  return `${decimalYears.toFixed(1)} +`;
};