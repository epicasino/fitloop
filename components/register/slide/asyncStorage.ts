import AsyncStorage from '@react-native-async-storage/async-storage';

export const getValue = async (fieldName: string) => {
  try {
    const value = await AsyncStorage.getItem(
      fieldName.trim().toLowerCase().split(' ').join('_')
    );
    if (value === null) {
      return '';
    }
    return value;
  } catch (e) {
    return `Error getting ${fieldName}`;
  }
};

export const setValue = async (fieldName: string, fieldValue: string) => {
  try {
    await AsyncStorage.setItem(
      fieldName.trim().toLowerCase().split(' ').join('_'),
      fieldValue
    );
    // console.log(await getValue(fieldName));
  } catch (e) {
    return `Error setting ${fieldName}`;
  }
};

export const getAllValues = async () => {
  const keys = [
    'name',
    'gender',
    'birthday',
    'feet',
    'inch',
    'current_weight',
    'target_weight',
    'exercise_level',
    'pace',
    'cutorbulk',
  ];
  const values = await AsyncStorage.multiGet(keys);
  const objectValues = values.map((values) => {
    let obj: { [key: string]: string | null } = {};
    obj[values[0]] = values[1];
    return obj;
  });
  const userValues: { [key: string]: string | null } = {};

  for (let i = 0; i < objectValues.length; i++) {
    Object.assign(userValues, objectValues[i]);
  }

  return userValues;
};

export const clearValues = async () => {
  const keys = [
    'name',
    'gender',
    'birthday',
    'feet',
    'inch',
    'current_weight',
    'target_weight',
    'exercise_level',
    'pace',
    'cutorbulk',
  ];
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (e) {
    console.error(e);
  }
  console.log('Cleared Values');
};
