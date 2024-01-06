const year = document.getElementById("year") as HTMLSpanElement
const thisYear = new Date().getFullYear().toString() as string
year.setAttribute("datetime", thisYear)
year.textContent =  thisYear