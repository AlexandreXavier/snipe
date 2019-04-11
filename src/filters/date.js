export default value => {
  /* const date = new Date(value)
  return date.toLocaleString(['en-US'], {month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'}) */

  const date = new Date(value);
  return date.toLocaleString(["pt-PT"], {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
};
