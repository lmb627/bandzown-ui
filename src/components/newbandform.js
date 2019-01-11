import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import FKTextInput from '../components/fktextinput';
import styles from '../styles/styles';

import { postBand } from '../reducers/newband';

export class NewBandForm extends Component {

  static BandSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    genre: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  constructor(props) {
    super(props);
    this.state = {
      status: {}
    };
  }

  render() {
    return (

      <Formik
        initialValues = {{
                name: '',
                genre: '',
              }}

        onSubmit = {({ name, genre }) => {
          console.log(`name: ${name}`);
          console.log(`genre: ${genre}`);
          console.log(`status: ${this.state.status}`);
          const band = {
            name: name,
            genre: genre
          };
          this.props.postBand(band);
        }}

        validationSchema={NewBandForm.BandSchema}

        render = {({
          handleSubmit,
          isSubmitting,
          isValid
        }) => (
          <View>
            <Text
              style = {styles.formLabel}
            >
              Name:
            </Text>
            <Field
              component = {FKTextInput}
              name = "name"
              disabled = {isSubmitting}
            />

            <Text
              style = {styles.formLabel}
            >
              Genre:
            </Text>
            <Field
              component = {FKTextInput}
              name = "genre"
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

const mapStateToProps = state => {
  const bandDetail = state.detail;
  if (bandDetail) {
    return {
      detail: bandDetail
    };
  } else {
    return {};
  }
};

const mapDispatchToProps = {
  postBand
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(NewBandForm));
