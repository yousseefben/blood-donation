import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useUser} from '_context/userContext';
import {
  useProfilesLazyQuery,
  useRequestsLazyQuery,
  useRequestsQuery,
} from '_generated/graphql';
import DonationNeedSection, {
  DonationNeedProps,
} from '_organisms/DonationNeedSection';
import {reuquestsMapper} from '_utils/mappers';

type Props = {
  nearby?: boolean;
  isRequests?: boolean;
};
const DonationNeedContainer = ({
  onAction,
  hasAction,
  nearby,
  isRequests,
}: DonationNeedProps & Props) => {
  const {state} = useUser();
  const {latitude, longitude} = state.currentLocation || {};
  const [
    loadRequests,
    {calledRequests, loadingRequests, data: dataRequests},
  ] = useRequestsLazyQuery({
    variables: !nearby ? {} : {sort: 'created_at:DESC'},
  });

  const [
    loadProfiles,
    {calledProfiles, loadingProfiles, data: dataProfiles},
  ] = useProfilesLazyQuery({
    // variables: !nearby ? {} : {sort: 'created_at:DESC'},
  });

  useEffect(() => {
    isRequests ? loadRequests() : loadProfiles();
  }, [isRequests]);
  const data = useMemo(
    () => (isRequests ? dataRequests?.requests : dataProfiles?.profiles),
    [dataRequests, dataProfiles, isRequests],
  );
  console.log('datarequ', dataRequests);
  return (
    <DonationNeedSection
      bloodDonationRequests={reuquestsMapper(data, latitude, longitude)}
      onAction={onAction}
      hasAction={hasAction}
    />
  );
};

export default DonationNeedContainer;
