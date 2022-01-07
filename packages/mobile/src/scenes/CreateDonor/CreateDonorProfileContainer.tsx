import React, {useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CreateDonorProfileComponent from '_molecules/CreateDonorProfileComponent';
import {useIntl} from 'react-intl';
import {formatDate} from '_utils/helpers';
import {
  Enum_Profile_Group,
  Enum_Profile_Period,
  useCreateProfileMutation,
} from '../../generated/graphql';
import Spinner from 'react-native-loading-spinner-overlay';
import {TYPE_ENUM, useAlert} from '_context/alertContext';
import {useUser} from '_context/userContext';
import {useSpinner} from '_context/spinnerContext';
import {useNavigation} from '@react-navigation/native';

type Params = {userId?: string};

const schema = Yup.object().shape({
  name: Yup.string().required('create.donor.name.required'),
  dob: Yup.string().required('create.donor.dob.required'),
  city: Yup.string().required('create.donor.city.required'),
  group: Yup.string().required('create.donor.group.required'),
  period: Yup.string().required('create.donor.period.required'),
});

const CreateDonorProfileContainer = () => {
  const {goBack} = useNavigation();
  const intl = useIntl();
  const alert = useAlert();
  const spin = useSpinner();
  const {login} = useUser();
  const [createProfile, {loading, error, data}] = useCreateProfileMutation();
  const handleSubmit = (v) => {
    console.log('value', v);
    console.log('shitty', new Date(v.dob));
    const {name, dob, group, period, lat, long} = v;
    createProfile({
      variables: {
        name,
        dob: new Date(dob).toISOString().split('T')[0],
        group,
        period: Enum_Profile_Period.Four,
        lat,
        lng: long,
      },
    });
  };
  useEffect(() => {
    spin(loading);
    if (!loading && data) {
      goBack();
      alert('success message here', TYPE_ENUM.success);
      login();
    }
  }, [loading, data]);
  return (
    <>
      <Formik
        initialValues={{
          group: null,
          period: null,
          name: '',
          dob: '',
          city: '',
          lat: '',
          long: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={schema}>
        {({handleSubmit, values, setFieldValue}) => (
          <CreateDonorProfileComponent
            onSubmit={handleSubmit}
            values={values}
            setFieldValue={setFieldValue}
            intl={intl}
          />
        )}
      </Formik>
    </>
  );
};

export default CreateDonorProfileContainer;
