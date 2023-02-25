const formatDateString = (dateString) => {
  const dateArray = dateString.split("-");
  const date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
  const options = { month: "short", day: "numeric" };
  const label = date.toLocaleString("en-US", options);
  return label;
};

export default formatDateString;
