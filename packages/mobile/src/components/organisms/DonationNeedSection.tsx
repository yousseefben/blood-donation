import React, {useRef, useState} from 'react';
import {Dimensions} from 'react-native';
import BloodDonorRequestCard, {
  BloodDonorRequestCardProps,
} from '_molecules/BloodDonorRequestCard';
import CardSection from '_molecules/CardSection';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import DetailsNeedComponent from './DetailsNeedComponent';

const {height} = Dimensions.get('window');
export type DonationNeedProps = {
  bloodDonationRequests?: BloodDonorRequestCardProps[];
  onAction?: any;
  hasAction?: boolean;
  bg?: string;
};
const DonationNeedSection = ({
  bloodDonationRequests,
  onAction,
  hasAction,
  bg,
}: DonationNeedProps) => {
  const modalizeRef = useRef<Modalize>(null);
  const [request, setRequest] = useState<BloodDonorRequestCardProps>();

  const onOpen = (bloodRequest: BloodDonorRequestCardProps) => {
    setRequest(bloodRequest);
    modalizeRef.current?.open();
  };
  return (
    <CardSection
      title="Donation Need"
      hasAction={hasAction}
      onAction={onAction}
      bg={bg}>
      {bloodDonationRequests?.map((b, i) => (
        <BloodDonorRequestCard
          name={b.name}
          distance={b.distance}
          group={b.group}
          mb="20px"
          key={i}
          onPress={() => {
            onOpen(b);
          }}
        />
      ))}
      <Portal>
        <Modalize
          ref={modalizeRef}
          snapPoint={0.6 * height}
          // HeaderComponent={<Text>Header</Text>}
          // withHandle={true}
          modalTopOffset={80}
          // modalHeight={700}
        >
          {request && <DetailsNeedComponent request={request} />}
        </Modalize>
      </Portal>
    </CardSection>
  );
};

export default DonationNeedSection;
