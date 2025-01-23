export const calculateAge = (birthday: string) => {
  const splitBirthday = birthday.split('/');
  const year = splitBirthday[2];
  const month =
    splitBirthday[0].length === 1
      ? '0' + splitBirthday[0].toString()
      : splitBirthday[0];
  const day =
    splitBirthday[1].length === 1 ? '0' + splitBirthday[0] : splitBirthday[1];
  // console.log(`${year}/${month}/${day}`);
  const ageDifMs = Date.now() - new Date(`${year}-${month}-${day}`).getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const calculateBmr = (
  gender: boolean,
  currentWeight: number,
  height: number,
  birthday: string
) => {
  return gender
    ? 88.362 +
        13.397 * (currentWeight * 0.45359237) +
        4.799 * (height * 2.54) -
        5.677 * calculateAge(birthday)
    : 447.593 +
        9.247 * (currentWeight * 0.45359237) +
        3.098 * (height * 2.54) -
        4.33 * calculateAge(birthday);
};
