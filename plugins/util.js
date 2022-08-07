import moment from 'moment'

export default (ctx, inject) => {
  inject('util', {
    getDay: function (d) {
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
        'Dec',
      ]
      const date = new Date(d)
      const day = `${date.getDate()} ${months[date.getMonth()]} ${date
        .getFullYear()
        .toString()
        .substr(-2)}`

      return day
    },
    dateChangeFormate(v, f) {
      // YYYY/MM/DD
      if (v && f) {
        return moment(v).format(f)
      } else {
        return moment()
      }
    },
  })
}
