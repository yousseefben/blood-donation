import React from 'react';
import Box from '_atoms/Box/Box';
import GroupComponent from '_molecules/GroupComponent';
import Text from '_atoms/Text/Text';
import Button from '_atoms/Button/Button';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Theme} from '_styles/theme';
import {height, width} from 'styled-system';
import MapView, {Marker} from 'react-native-maps';
import {BloodDonorRequestCardProps} from '_molecules/BloodDonorRequestCard';

type Props = {
  request: BloodDonorRequestCardProps;
};
const DetailsNeedComponent = ({request}: Props) => {
  const {name, group, description, lat, lng, distance} = request;
  return (
    <Box mt="10px">
      <Box flexDirection="row" px="20px">
        <GroupComponent group={group} />
        <Box ml="30px" flexGrow={1}>
          <Text fontSize="17px">{group} Blood Donor Needed</Text>
          <Text color="textSecondary" fontSize="16px" mt="5px">
            Requested by {name}
          </Text>
          <Text fontSize="16px" mt="5px">
            {distance} km away
          </Text>
          <Text
            fontSize="16px"
            mt="5px"
            textAlign="right"
            color="textSecondary">
            2 hours ago
          </Text>
        </Box>
      </Box>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        my="10px"
        px="15px">
        <Box flexBasis="47%">
          <Button
            fullwidth
            variant="contained"
            icon={<IconFontAwesome name="phone" size={20} color="#FFF" />}
            text="Offer Help"
            textProps={{fontSize: '16px'}}
          />
        </Box>
        <Box flexBasis="47%">
          <Button
            fullwidth
            variant="outlined"
            icon={<Icon name="people" size={20} color={Theme.colors.primary} />}
            text="Ask a Friend"
            textProps={{fontSize: '16px'}}
          />
        </Box>
      </Box>
      <Box bg="backgroundSecondary" pt="10px" px="10px" height="100%">
        <Text mb="20px" fontSize="16px">
          Note by Family Member:
        </Text>
        <Text fontSize="14px" color="textSecondary" mb="30px">
          {description}
        </Text>
        <Box width="100%" height="200px">
          <MapView
            style={{
              height: 200,
            }}
            region={{
              latitude: '37.78829',
              longitude: '-122.4324',
            }}
            initialRegion={{
              latitude: lat,
              longitude: lng,
              latitudeDelta: 0.00122,
              longitudeDelta: 0.00421,
            }}>
            <Marker
              coordinate={{
                latitude: lat,
                longitude: lng,
              }}
            />
          </MapView>
        </Box>
        <Box flexDirection="row" mt="15px">
          <Box flexGrow={1}>
            <Text mb="5px" fontSize="16px">
              BLK Super Speciality Hospital
            </Text>
            <Text fontSize="14px" color="textSecondary" mb="30px">
              she requires blood transfusion
            </Text>
          </Box>
          <Button>
            <Box alignItems="center">
              <IconFontAwesome5
                name="directions"
                size={30}
                color={Theme.colors.primary}
              />
              <Text mt="5px" fontWeight="300" fontSize="12px">
                Get Directions
              </Text>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default DetailsNeedComponent;
