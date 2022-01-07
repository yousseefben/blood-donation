import React, {useState} from 'react';
import Box from '_atoms/Box/Box';
import WhoCanDonate from '_molecules/WhoCanDonate';
import {Tabs} from '_atoms/index';
import DonationNeedContainer from '_containers/DonationNeedContainer';

const AllRequestsComponent = ({isRequests}) => {
  const [nearby, setNearby] = useState(false);
  return (
    <Box mt="10px" pt="20px">
      <Tabs
        config={[
          {text: 'text1', func: () => setNearby(false)},
          {text: 'text2', func: () => setNearby(true)},
        ]}
      />
      {isRequests && (
        <WhoCanDonate mx="20px" borderRadius="10px" mb="15px" mt="20px" />
      )}
      <DonationNeedContainer
        bg="transparent"
        nearby={nearby}
        isRequests={isRequests}
      />
    </Box>
  );
};
export default AllRequestsComponent;
