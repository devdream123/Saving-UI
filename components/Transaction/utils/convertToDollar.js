export const convertToDollar = (value) => {
  const result = value / 100;
  const formatValue = result.toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD",
  });
  return formatValue;
};
