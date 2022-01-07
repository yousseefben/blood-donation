import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Button from '_atoms/Button/Button';
import Box from '_atoms/Box/Box';
import Text from '_atoms/Text/Text';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontiso from 'react-native-vector-icons/Fontisto';
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
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {openSettings} from 'react-native-permissions';
import {useNavigation} from '@react-navigation/native';
import TextField from '_atoms/TextField/TextField';
import {createDate, formatDate} from '_utils/helpers';

// openSettings().catch(() => console.warn('cannot open settings'));

const {width, height} = Dimensions.get('window');

const bloodGroups = [
  {id: 'A+', value: 'Aplus'},
  {id: 'A-', value: 'Amoins'},
  {id: 'B+', value: 'Bplus'},
  {id: 'B-', value: 'Bmoins'},
  {id: 'O+', value: 'Oplus'},
  {id: 'O-', value: 'Omoins'},
  {id: 'AB+', value: 'ABplus'},
  {id: 'AB-', value: 'ABmoins'},
];
const periodDonation = [
  {
    id: 3,
    value: '3 Monthly',
  },
  {
    id: 4,
    value: '4 Monthly',
  },
  {
    id: 6,
    value: '6 Monthly',
  },
];
const CreateDonorProfileComponent = ({
  onSubmit,
  values,
  setFieldValue,
  isRequest,
  intl,
}) => {
  const [currentLocation, setCurrentLocation] = useState<any>({
    coord: null,
    city: '',
  });

  const {navigate} = useNavigation();

  useEffect(() => {
    if (currentLocation.city && currentLocation.coord) {
      setFieldValue('city', currentLocation.city);
      setFieldValue('lat', currentLocation.coord.latitude);
      setFieldValue('long', currentLocation.coord.longitude);
    }
  }, [currentLocation]);

  const renderItem = ({item: b}) => (
    <Box my="10px" width={1 / 4} alignItems="center">
      <Button
        text={b.id}
        variant="outlined"
        textProps={{width: '30px'}}
        boxProps={{py: '6px'}}
        color={b.value === values.group ? 'primary' : 'textSecondary'}
        onPress={() => setFieldValue('group', b.value)}
      />
    </Box>
  );

  return (
    <>
      <Box my="20px">
        <Text mb="10px" ml="5px">
          <Icon name="user" size={20} color={Theme.colors.primary} /> {` Name`}
        </Text>
        <TextField name="name" placeholder="Entrer" maxLength={30} />
      </Box>
      {isRequest && (
        <Box my="20px">
          <Text mb="10px" ml="5px">
            <Icon name="phone" size={20} color={Theme.colors.primary} />
            {` Phone`}
          </Text>
          <TextField
            name="phone"
            placeholder="06xxxxxxxx"
            maxLength={30}
            keyboardType="numeric"
          />
        </Box>
      )}
      {!isRequest && (
        <Box>
          <Text mb="10px" ml="5px">
            <Icon name="calendar-o" size={20} color={Theme.colors.primary} />{' '}
            {` DOB`}
          </Text>
          <DatePicker
            style={{width: '100%'}}
            date={formatDate(values.dob, intl)}
            mode="date"
            placeholder="select date"
            format="DD/MM/YYYY"
            androidMode="spinner"
            // minDate="2016-05-01"
            maxDate={createDate(0, 0, -18)}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateInput: {
                // marginLeft: 36,
                backgroundColor: Theme.colors.backgroundSecondary,
                borderColor: 'transparent',
                borderRadius: 8,
                height: 48,
              },
              dateText: {position: 'absolute', left: 20},
              placeholderText: {position: 'absolute', left: 20},

              // ... You can check the source to find the other keys.
            }}
            showIcon={false}
            onDateChange={(date, d) => {
              setFieldValue('dob', d);
              console.log(formatDate(d, intl));
              // this.setState({date: date});
            }}
            locale="fr"
          />
        </Box>
      )}
      <Box mb="20px" mt="20px">
        <Text mb="10px" ml="5px">
          <IconFontiso
            name="blood-drop"
            size={18}
            color={Theme.colors.primary}
          />
          {`  Blood group`}
        </Text>
        <Box>
          <FlatList
            keyExtractor={(item) => item.id}
            numColumns={4}
            data={bloodGroups}
            renderItem={renderItem}
          />
        </Box>
      </Box>
      {!isRequest && (
        <Box mb="20px" mt="20px">
          <Text mb="10px" ml="5px">
            <IconFontiso
              name="blood-drop"
              size={18}
              color={Theme.colors.primary}
            />
            {` How often`}
          </Text>
          <Box flexDirection="row" justifyContent="space-between" mx="20px">
            {periodDonation.map((p) => (
              <Button
                variant="outlined"
                boxProps={{py: '6px'}}
                text={p.value}
                color={p.id === values.period ? 'primary' : 'textSecondary'}
                onPress={() => setFieldValue('period', p.id)}
              />
            ))}
          </Box>
        </Box>
      )}
      <Box my="20px">
        <Text ml="5px">
          <Icon name="home" size={20} color={Theme.colors.primary} />
          {` Location`}
        </Text>
        <Text mb="15px" ml="10px" fontSize="12px" color="textSecondary">
          Adress will help ...
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigate('Maps', {
              onSelect: setCurrentLocation,
              location: currentLocation,
            })
          }>
          <TextInput
            placeholder="Entrer your current location"
            maxLength={30}
            iconLeft={<Icon name="home" size={20} />}
            // onFocus={() => navigation.navigate('Maps')}
            editable={false}
            onTouchEnd={() => console.log('here')}
            onTouchStart={() => {
              console.log('toih');
              navigate('Maps', {
                onSelect: setCurrentLocation,
                location: currentLocation,
              });
            }}
            value={values.city}
          />
        </TouchableOpacity>
      </Box>
      {isRequest && (
        <Box mt="20px">
          <Text mb="10px" ml="5px">
            <Icon name="user" size={20} color={Theme.colors.primary} />{' '}
            {` Add a note`}
          </Text>
          <TextField name="note" placeholder="Entrer" multiline />
        </Box>
      )}
      <Box my="40px">
        <Button align="center" onPress={onSubmit} fullwidth variant="contained">
          {`Next `} <Icon name="chevron-right" size={13} />
        </Button>
      </Box>
    </>
  );
};

export default CreateDonorProfileComponent;
