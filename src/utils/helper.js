const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

export function getTimeStamp() {
  const date = new Date();
  const timestamp = date.toLocaleDateString("es-ES", options);
  return timestamp + "hs.";
}

export function formatPrice(price) {
  const roundPrice = Math.round(price);
  const formatNumber = roundPrice
    .toString()
    .split("")
    .reverse()
    .map((e, i) => (i % 3 === 0 && i !== 0 ? `${e}.` : e))
    .reverse()
    .join("");

  return formatNumber;
}
