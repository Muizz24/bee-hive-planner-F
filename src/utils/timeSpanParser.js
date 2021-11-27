function daysInMonth (month, year) {
  return new Date(year, month, 0).getDate();
}

const isInPastWeek = (row) => {
  // Get the start of the past week
  const today = new Date()
  const thisWeekDay = today.getDay()

  const startOfPastWeek = new Date(today.setDate(today.getDate() - thisWeekDay - 7))

  // loop over week
  let status = false

  for (let i = 0; i < 7; i++) {
    let newDate = (new Date(startOfPastWeek.setDate(startOfPastWeek.getDate() + i))).toLocaleDateString("en-US")
    const rowDate = new Date(row["date_outbound_last"]).toLocaleDateString("en-US")
    if (newDate === rowDate) {
      status = true
    }
  }

  return status
}

const isInThisWeek = (row) => {
  // Get the start of the past week
  const today = new Date()
  const thisWeekDay = today.getDay()

  const startOfThisWeek = new Date(today.setDate(today.getDate() - thisWeekDay))

  // loop over week
  let status = false

  for (let i = 0; i < thisWeekDay; i++) {
    let newDate = (new Date(startOfThisWeek.setDate(startOfThisWeek.getDate() + i))).toLocaleDateString("en-US")
    const rowDate = new Date(row["date_outbound_last"]).toLocaleDateString("en-US")
    if (newDate === rowDate) {
      status = true
    }
  }

  return status
}

const isInPastMonth = (row) => {
  const today = new Date()
  const maxDay = daysInMonth(today.getFullYear(), today.getMonth() + 1)
  const lastMonthDate = new Date(today.setMonth(today.getMonth() - 1))

  // loop over month
  let status = false

  for (let i = 1; i <= maxDay; i++) {
    let newDate = (new Date(lastMonthDate.setDate(i))).toLocaleDateString("en-US")
    const rowDate = new Date(row["date_outbound_last"]).toLocaleDateString("en-US")
    if (newDate === rowDate) {
      status = true
    }
  }

  return status
}

const isInThisMonth = (row) => {
  const today = new Date()
  const thisDate = today.getDate()

  // loop over month
  let status = false

  for (let i = 1; i <= thisDate; i++) {
    let newDate = (new Date(today.setDate(i))).toLocaleDateString("en-US")
    const rowDate = new Date(row["date_outbound_last"]).toLocaleDateString("en-US")
    if (newDate === rowDate) {
      status = true
    }
  }

  return status
}

const isInOutreached = (row) => {
  return row["date_outbound_last"] != null
}

const isInScheduled = (row) => {
  return row["date_outbound_next"] != null
}

const isInUpcoming = (row) => {
  return ((row["date_outbound_next"] === null) || !row["date_outbound_next"]) && row["date_outbound_last"] === null
}

const isInTimespan = (row, option) => {
  switch (option) {
    case "Upcoming":
      return isInUpcoming(row)
    case "Outreached":
      return isInOutreached(row)
    case "Scheduled":
      return isInScheduled(row)
    case "This Week":
      return isInThisWeek(row)
    case "Last Week":
      return isInPastWeek(row)
    case "This Month":
      return isInThisMonth(row)
    case "Last Month":
      return isInPastMonth(row)
  }
}

export function isInTimespans(row, optionValues) {
  
  const statuses = optionValues.map(option => {
    return isInTimespan(row, option)
  })

  return statuses.includes(true)
}




export default {isInTimespans}
