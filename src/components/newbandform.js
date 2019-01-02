import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import FKTextInput from './fktextinput';

export class NewBandForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: {}
    }
  }

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
        initialValues = {{
                firstName: '',
                lastName: '',
              }}

        onSubmit = {({ firstName, lastName }) => {
          console.log(`firstName: ${firstName}`);
          console.log(`lastName: ${lastName}`);
          console.log(`status: ${this.state.status}`)
          const band = {
            name: firstName,
            genre: lastName
          }
          this.props.postBand(band);
        }}

        validationSchema={NewBandForm.SignupSchema}

        render = {({
          handleSubmit,
          isSubmitting,
          errors,
          touched,
          status,
          isValid
        }) => (
          <View>
            <Field
              component = {FKTextInput}
              name = "firstName"
              disabled = {isSubmitting}
            />

            <Field
              component = {FKTextInput}
              name = "lastName"
              disabled = {isSubmitting}
            />

            {this.state.status.succeeded &&
              <Text style={styles.rootSucceeded}>SUCCEEDED</Text>
            }
            {this.state.status.failed &&
              <Text style={styles.rootFailed}>FAILED</Text>
            }
            <Button
              title = "Submit Form"
              onPress = {handleSubmit}
              disabled={!isValid || isSubmitting}
            />
          </View>
        )}

        />
    );
  }
}
