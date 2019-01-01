import React from 'react';
import { Formik } from 'formik';
import { Button, View } from 'react-native'; 

const NewBandForm = () => (
  <Formik
    onSubmit={() => {
      console.log('SUBMITTED');
    }}
    render={({
      handleSubmit,
    }) => (
      <View>
        <Button
          title="Submit Hello"
          onPress={handleSubmit}
        />
      </View>
    )}
  />
);

export default NewBandForm;
