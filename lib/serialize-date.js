// const _serializeDate = (dateString) => {
//   const day = dateString.split(' ')[0]
//   const month = dateString.split(' ')[1]
//   const year = dateString.split(' ')[2]

//   const monthLabels = [
//     'january',
//     'february',
//     'march',
//     'april',
//     'may',
//     'june',
//     'july',
//     'august',
//     'september',
//     'october',
//     'november',
//     'december'
//   ]

//   const monthIndex = monthLabels.indexOf(month.toLowerCase())

//   return new Date(year, monthIndex, day)
// }

const serializeDate = (dateString) => {
  return new Date(dateString);
};

module.exports = serializeDate;
