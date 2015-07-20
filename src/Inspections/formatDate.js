import moment from 'moment'

export default function formatConductDate(conductDate) {
  const DATE = 'DD MMMM YYYY'
  const TIME = 'HH:mm'
  let date = moment(conductDate)
  if (date.hours() === 0) {
    return date.format(DATE)
  }
  else {
    return date.format(`${DATE} [at] ${TIME}`)
  }
}
