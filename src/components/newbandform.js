import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import FKTextInput from './fktextinput';


export class NewBandForm extends Component {

  static SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  render() {
    return (

      <Formik
        initialValues={{
                firstName: '',
                lastName: '',
              }}

        onSubmit={({ firstName, lastName }) => {
          console.log(`firstName: ${firstName}`);
          console.log(`lastName: ${lastName}`);
        }}

        validationSchema={NewBandForm.SignupSchema}

        render={({
          handleSubmit,
          errors,
          touched
        }) => (
          <View>
            <Field
              component={FKTextInput}
              name="firstName"
            />

            <Field
              component={FKTextInput}
              name="lastName"
            />

            <Button
              title = "Submit Form"
              onPress = {handleSubmit}
              disabled = {!errors}
            />
          </View>
        )}

        />
    );
  }
}
