  export const monthCal = (m, y) => {
    const dates = {sun: [], mon: [], tue: [], wed:[], thur: [], fri:[], sat: []}
    const now = new Date()

    let year = now.getFullYear()
    let month = now.getMonth()

    if(m){
      month = m
    }

    if(y){
      year = y
    }

    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)



    for(let day = firstDay.getDate(); day< lastDay.getDate() +1; day++){
      let dayX = new Date(year, month, day)

      let key = Object.keys(dates).at(dayX.getDay())
          dates[key].push(day)
    }

    if(dates.sun[0]> 1){
      dates.sun.unshift('') 
    }

    if(dates.mon[0]> 2){
      dates.mon.unshift('')
    }

    if(dates.tue[0]>3){
      dates.tue.unshift('')
    }

    if(dates.wed[0]> 4){
      dates.wed.unshift('')
    }

    if(dates.thur.length < 5){
      dates.thur.push('')
    }

    if(dates.thur[0] > 5){
      dates.thur.unshift('')
      dates.thur.pop()
    }

    if(dates.fri.length < 5) {
      dates.fri.push('')
    }

    if(dates.fri[0] > 5){
      dates.fri.unshift('')
      dates.fri.pop()
    }

    if(dates.sat.length < 5){
      dates.sat.push('')
    }

    return dates
  }

  export const currentMonth = () => {
    const now = new Date()
    const month = now.getMonth()
    return month
  }

  export const currentYear = () => {
    const now = new Date()
    const year = now.getFullYear()
    return year
  }




