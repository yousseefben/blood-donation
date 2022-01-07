import React, {useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CreateDonorProfileComponent from '_molecules/CreateDonorProfileComponent';
import {useCreateRequestMutation} from '_generated/graphql.tsx';
import {useSpinner} from '_context/spinnerContext';
import {useNavigation} from '@react-navigation/native';
import {TYPE_ENUM, useAlert} from '_context/alertContext';
type Params = {userId?: string};

const CreateRequestContainer = () => {
  const [createRequest, {loading, error, data}] = useCreateRequestMutation();
  const spin = useSpinner();
  const alert = useAlert();
  const {goBack} = useNavigation();
  console.log(loading, error?.message);
  console.log(data);
  const handleSubmit = (v) => {
    const {name, note, group, lat, long, phone} = v;
    console.log(v);
    createRequest({
      variables: {
        name,
        description: note,
        group,
        lat,
        lng: long,
        phone: parseInt(phone),
      },
    });
  };
  useEffect(() => {
    spin(loading);
    if (!loading && data) {
      goBack();
      alert('success message here', TYPE_ENUM.success);
    }
  }, [loading, data]);
  return (
    <>
      <Formik
        initialValues={{
          group: null,
          name: '',
          city: '',
          lat: '',
          long: '',
          note: '',
          phone: '',
        }}
        onSubmit={handleSubmit}
        // validationSchema={schema}
      >
        {({handleSubmit, values, setFieldValue}) => (
          <CreateDonorProfileComponent
            onSubmit={handleSubmit}
            values={values}
            setFieldValue={setFieldValue}
            isRequest
          />
        )}
      </Formik>
    </>
  );
};

export default CreateRequestContainer;
