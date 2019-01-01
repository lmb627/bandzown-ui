import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { Field, Formik } from 'formik';

import FKTextInput from './fktextinput';


export class NewBandForm extends Component {

  render() {
    return (

      <Formik
        onSubmit={({ firstName, lastName }) => {
          console.log(`firstName: ${firstName}`);
          console.log(`lastName: ${lastName}`);
        }}
        render={({
          handleSubmit,
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
              title="Submit Refactor"
              onPress={handleSubmit}
            />
          </View>
        )}
        />



    );
  }

}
