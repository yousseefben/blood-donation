import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key: string, value: string | object) => {
  try {
    const preparedValue =
      typeof value === 'object' ? JSON.stringify(value) : value;
    await AsyncStorage.setItem(key, preparedValue);
  } catch (e) {
    console.log('error storing asyncstorage', e);
  }
};

export const getData = async (key: string, isObject: boolean = true) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return isObject ? JSON.parse(value) : value;
    }
    return null;
  } catch (e) {
    console.log('error reading async storage', e);
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log('remove async', e);
  }
};
