const extract = (date) =>
  date
    .toISOString()
    .split(/[^0-9]/)
    .slice(0, -1)

const formatDate = (date) => {
  const [year, month, day, hour, minute, second, millisecond] = extract(
    new Date(date)
  )
  return `${day}/${month}/${year}`;
}

export default formatDate
