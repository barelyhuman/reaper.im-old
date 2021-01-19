const extract = (date) =>
  date
    .toISOString()
    .split(/[^0-9]/)
    .slice(0, -1)

const formatDate = (date) => {
  const [year, month, day, hour, minute, second, millisecond] = extract(
    new Date(date)
  )
  return `${day}/${month}/${year}`
}

export const shortFormatDate = (date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const [year, month, day, hour, minute, second, millisecond] = extract(
    new Date(date)
  )
  return `${months[month - 1]} ${day}, ${year}`
}

export default formatDate
