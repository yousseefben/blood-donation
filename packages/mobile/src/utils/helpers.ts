import {FormatDateOptions, IntlShape} from 'react-intl';
import {Platform} from 'react-native';
import {
  check,
  PERMISSIONS,
  checkMultiple,
  RESULTS,
} from 'react-native-permissions';

export const checkPermissionLocation = async () =>
  // checkMultiple([
  //         PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  //         PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
  //       ])).the
  await check(
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  )
    .then((result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          return false;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          return false;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          return true;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          return false;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });

const API_KEY = '9ePl2J4v-y_LehhzM0ZDd0fCIMZoDKeKy1HaXP-98lk';
export const getAddressFromCoordinates = ({latitude, longitude}) => {
  return new Promise((resolve, reject) => {
    const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${API_KEY}&mode=retrieveAddresses&prox=${latitude},${longitude}&language=fr`;
    fetch(url)
      .then((res) => res.json())
      .then((resJson) => {
        console.log('resJson', resJson);
        if (resJson.error) reject(resJson);
        // the response had a deeply nested structure :/
        if (
          resJson &&
          resJson.Response &&
          resJson.Response.View &&
          resJson.Response.View[0] &&
          resJson.Response.View[0].Result &&
          resJson.Response.View[0].Result[0]
        ) {
          resolve(resJson.Response.View[0].Result[0].Location.Address.City);
        } else {
          resolve();
        }
      })
      .catch((e) => {
        console.log('Error in getAddressFromCoordinates', e);
        reject(e);
      });
  });
};

export const createDate = (days, months, years) => {
  var date = new Date();
  date.setDate(date.getDate() + days);
  date.setMonth(date.getMonth() + months);
  date.setFullYear(date.getFullYear() + years);
  return date;
};

export const createAction = (type: string, payload?: any) => {
  return {type, payload};
};

export const formatMessage = (
  id: string,
  defaultMessage: string,
  intl: IntlShape,
  extra?: any,
) => intl.formatMessage({id, defaultMessage}, extra);

export const convertDate = (str: string) => {
  const parts = str.split('/');
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};
export const formatDate = (
  date,
  intl: IntlShape,
  time = false,
  isTimestamp = false,
) => {
  if (!date) return '';
  const d = !isTimestamp && isNaN(Date.parse(date)) ? convertDate(date) : date;
  const optionsInit: FormatDateOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  if (time) {
    optionsInit.hour = 'numeric';
    optionsInit.minute = 'numeric';
  }

  return intl.formatDate(d, optionsInit);
};

export function distance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  unit: any,
) {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == 'K') {
      dist = dist * 1.609344;
    }
    if (unit == 'N') {
      dist = dist * 0.8684;
    }
    return dist.toFixed(2);
  }
}
