const initializeWeek = (date: string) => {
  // https://medium.com/@quynh.totuan/how-to-get-the-current-week-in-javascript-9e64d45a9a08
  let initWeek = [];

  for (let i = 0; i < 7; i++) {
    let first = new Date(date).getDate() - new Date(date).getDay() + i;
    let day = new Date(new Date(date).setDate(first)).toDateString();
    initWeek.push(day);
  }
  return initWeek;
};

export default initializeWeek;
