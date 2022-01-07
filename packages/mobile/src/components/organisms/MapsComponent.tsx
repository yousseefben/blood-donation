import React, {useState, useEffect, useRef} from 'react';
import {View, Image, Dimensions, StyleSheet, Platform} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Button from '_atoms/Button/Button';
import Box from '_atoms/Box/Box';
import Text from '_atoms/Text/Text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-datepicker';
import MapView, {Marker} from 'react-native-maps';

type Params = {userId?: string};
// type ScreenProps = { language: string };
// NavigationStackScreenProps<Params, ScreenProps>
import CardHomeSection from '_organisms/CardHomeSection';
import Container from '_atoms/Container/Container';
import TextInput from '_atoms/TextInput/TextInput';
import {Theme} from '_styles/theme';
import {FlatList} from 'react-native-gesture-handler';
import Geolocation from 'react-native-geolocation-service';
import {
  check,
  PERMISSIONS,
  RESULTS,
  checkMultiple,
} from 'react-native-permissions';
import {openSettings} from 'react-native-permissions';
import {getAddressFromCoordinates} from '_utils/helpers';

// openSettings().catch(() => console.warn('cannot open settings'));

const {width, height} = Dimensions.get('window');

const MapsComponent = ({location, hasConfirm, onConfirm}) => {
  const [currentLocation, setCurrentLocation] = useState<
    Geolocation.GeoCoordinates
  >();
  const [coord, setCoord] = useState({});
  const [address, setAddress] = useState();

  const getCurrentLocation = () =>
    Geolocation.getCurrentPosition(
      (position) => {
        console.log('position', position);
        setCurrentLocation(position.coords);
        // setCoord(position.coords);
      },
      (error) => {
        // See error code charts below.
        console.log('trololo', error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('whenInUse');
    }
    getCurrentLocation();
  }, []);

  const ref = useRef();

  console.log('toto', location);
  return (
    <>
      <Box height={height - 80} zIndex={-1}>
        {currentLocation && (
          <MapView
            ref={ref}
            style={{
              height: '100%',
            }}
            initialRegion={{
              latitude: location?.coord?.latitude || currentLocation?.latitude,
              longitude:
                location?.coord?.longitude || currentLocation?.longitude,
              // latitudeDelta: LATITUDE_DELTA,
              // longitudeDelta: LONGITUDE_DELTA,
              latitudeDelta: 0.00122,
              longitudeDelta: 0.00421,
            }}
            onRegionChange={(e) => {
              // setLocation({...location, coord: e});
              setCoord(e);
              getAddressFromCoordinates(e).then((resp) => setAddress(resp));
            }}
            showsUserLocation
            // followsUserLocation
            showsMyLocationButton={true}
            onMapReady={() => {
              console.log('reaady');
            }}

            // provider="google"
          >
            {/* <Markeryarn
              coordinate={{
                latitude: 37.78829,
                longitude: -122.4324,
              }}
              title={'title'}
              description={'desc'}
            /> */}
            {/* <Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
              title={'title'}
              description={'desc'}
              style={{backgroundColor: 'green'}}
            /> */}
            <Marker
              draggable
              coordinate={coord}
              onDragEnd={(e) => {
                // setLocation({...location, coord: e.nativeEvent.coordinate});
                setCoord(e.nativeEvent.coordinate);
              }}
            />
          </MapView>
        )}
      </Box>
      <Box position="absolute" right="20px" bottom="100px">
        <Button
          onPress={() => {
            setTimeout(() => ref.current.animateToRegion(currentLocation), 10);
          }}>
          <Icon
            name="my-location"
            size={36}
            color={Theme.colors.textSecondary}
          />
        </Button>
      </Box>
      <Box mx="30px" mt="20px">
        <Button
          align="center"
          variant="outlined"
          fullwidth
          onPress={() => {
            onConfirm({coord, city: address});
          }}>
          Confirm
        </Button>
      </Box>
    </>
  );
};

export default MapsComponent;
