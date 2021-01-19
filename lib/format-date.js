const ms = require('ms')

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
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const [year, month, day, hour, minute, second, millisecond] = extract(
    new Date(date)
  )
  return `${months[month - 1]} ${day}, ${year}`
}

export const diffDuration = (date) => {
  const now = new Date().getTime()
  const dateMills = new Date(date).getTime()

  return ms(Math.abs(dateMills - now), { long: true })
}

export default formatDate
