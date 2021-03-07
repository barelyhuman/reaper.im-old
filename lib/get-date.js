export default function getDate (date) {
  if (date.toISOString) {
    date = date.toISOString()
  } else {
    date = '' + date
  }

  const dateSplits = date.split(/[-/]/g)

  const isReverseFormat = parseInt(dateSplits[2]) <= 31

  if (isReverseFormat) {
    return new Date(date).toISOString()
  } else {
    const date = dateSplits[0]
    const month = dateSplits[1]
    const year = dateSplits[2]
    return new Date(`${year}-${month}-${date}`).toISOString()
  }
}
