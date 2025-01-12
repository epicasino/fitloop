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
