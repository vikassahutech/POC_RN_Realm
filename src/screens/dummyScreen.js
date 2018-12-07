import React, { Component } from 'react';
import {
  TextInput, Alert, FlatList,
  SectionList, ActivityIndicator, ScrollView,
  View, Text, Button, AppRegistry, Image,
  Platform, TouchableHighlight, TouchableOpacity,
  TouchableNativeFeedback, TouchableWithoutFeedback, DeviceEventEmitter
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { strings } from '../config/i18/i18n';
import commonStyles from '../styles/common.style';
import LoaderComponent from '../components/loader.component';
import styles from '../styles/form.style';
import stackName from '../constants/stack.name.enum';
import screenId from '../constants/screen.id.enum';
import commonConstant from '../constants/common.constant';
import fontFamilyStyles from '../styles/font.style';

import ModalComponentModel from '../models/modal.component.model';
import CommonModal from '../components/common.modal';
import RealmPOJO from '../models/RealmModel';
import commonUtil from '../utils/common.util';
import { STUDENT_SCHEMA, StudentSchema } from '../allSchemas';
const Realm = require('realm');

// let realm = new Realm({ schema: [RealmModel] });
export default class DummyScreen extends Component {

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
   
    
   
    this.state = {
      showActivityIndicator: false,
      userName: "",
      studentname: "",
      studentNumber: "",
      studentAddress: "",
      password: "",
      realm:null,
      enableLoginBtn: true,
      modalComponent: {}
    };

    this.leftButtonClicked = this.leftButtonClicked.bind(this);
    this.rightButtonClicked = this.rightButtonClicked.bind(this);
  }

  initializeModalComponent = () => {
    let initialModalComponent = new ModalComponentModel();
    initialModalComponent.shouldVisible = false;
    this.setState({
      modalComponent: initialModalComponent
    })
  }

  componentWillMount() {
    this.initializeModalComponent();
  }

  componentWillUnmount() {
    //DeviceEventEmitter.removeAllListeners();

    Realm.open({
      schema: [{name: 'Dog', properties: {name: 'string'}}]
    }).then(realm => {
      realm.write(() => {
        realm.create('Dog', {name: 'Rex'});
      });
      this.setState({ realm });
    });


  }

  componentDidMount() {
  }

  leftButtonClicked = () => {
    this.showCustomAlert(false);
  }

  rightButtonClicked = () => {
    this.showCustomAlert(false);
  }

  closeButtonClicked = () => {
    this.showCustomAlert(false);
  }

  showCustomAlert = (visible, message) => {
    this.setState({
      modalComponent: commonUtil.setAlertComponent(visible, message, strings('common.okay'), "", true, false, () => this.leftButtonClicked(), () => this.rightButtonClicked(), () => this.closeButtonClicked())
    });
  }

  showLoader = (bit) => { // call this function to show/hide the loader
    this.setState({
      showActivityIndicator: bit
    });
  }

  signUpButtonPressed = () => {
    Navigation.push(stackName.AuthenticationStack, {
      component: {
        name: screenId.SignUpScreen,
      }
    });
  }

  _onLoginButtonPressed = () => {

    console.log("name : " + this.state.studentname)
    console.log("number : " + this.state.studentNumber)
    console.log("address : " + this.state.studentAddress)
    // this._creareNewDB();

  }

  
  _creareNewDB = () => {
    // Realm.open({
    //   schema: [{ STUDENT_SCHEMA, StudentSchema }]
    // }).then(realmdb => {
    //   realmdb.write(() => {
    //     // realmdb.create(STUDENT_SCHEMA, { name: this.state.studentname,number:this.state.studentNumber,address:this.state.studentAddress });
    //     realm.create(STUDENT_SCHEMA, {studentName: 'Honda', studentNunber: 'Accord', address: 'awd'});
    //     // realmdb.create(STUDENT_SCHEMA, { name: "Vikas"});     
    //    });
    //   this.setState({ realm :realmdb });
    // });



    // try {
    //   realm.write(() => {
    //     realm.create('Car', {make: 'Honda', model: 'Accord', drive: 'awd'});
    //   });
    // } catch (e) {
    //   console.log("Error on creation");
    // }
    console.log("Lenth of DB : " + this.state.realm.objects('Dog').length)
    // this.showCustomAlert(true,"Length : "+this.state.realm.objects(STUDENT_SCHEMA).length)
  }
  _insertDataOnRealm = () => {

    // realm.write(() => {
    //   let myCar = realm.create('Car', {
    //     make: 'Honda',
    //     model: 'Civic',
    //     miles: 1000,
    //   });
    //   myCar.miles += 20; // Update a property value
    // });

  }

  _onForgotPasswordButtonClicked = () => {

    this.showCustomAlert(true, "This feature is not available right now!");
  }

  focusNextInputField = (nextField) => {
    this.refs[nextField].focus();
  }

  checkIfFieldsAreNotEmpty = (type, value) => {
    if (type == "studentName") {
      this.setState({
        studentname: value
      }, () => {
        if (this.state.studentname.length >= 6) {
          this.changeLoginBtnState();
        } else {
          this.setState({
            enableLoginBtn: false
          });
        }
      });
    }
    if (type == "studentNumber") {
      this.setState({
        studentNumber: value
      }, () => {
        if (this.state.studentNumber.length >= 10) {
          this.changeLoginBtnState();
        } else {
          this.setState({
            enableLoginBtn: false
          });
        }
      });
    }
    if (type == "address") {
      this.setState({
        studentAddress: value
      }, () => {
        if (this.state.studentAddress.length >= 3) {
          this.changeLoginBtnState();
        } else {
          this.setState({
            enableLoginBtn: false
          });
        }
      });
    }
  }

  changeLoginBtnState = () => {
    if (this.state.studentname && this.state.studentNumber.length >= 10 && this.state.studentAddress) {
      this.setState({
        enableLoginBtn: true
      });
    } else {
      this.setState({
        enableLoginBtn: false
      });
    }
  }

  componentDidAppear() {

  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Text style={[styles.header, styles.reducedHeaderMargin]}>{strings('insert_data.insert_data')}</Text>

          <View style={styles.formView}>
            <View style={styles.elementBox1}>
              <Text style={styles.headerLabel}>{strings('insert_data.insert_name')}</Text>
              <View style={[styles.inputFieldCoverView, styles.authInputFieldBottomBorder]}>

                <TextInput
                  ref='0'

                  maxLength={commonConstant.MAX_CHARACTER_EMAIL}
                  style={styles.textInputView}
                  placeholder={strings('insert_data.insert_name_placeholder')}
                  returnKeyType='next'
                  autoCapitalize="none"
                  keyboardType="default"
                  onSubmitEditing={() => this.focusNextInputField('1')}
                  onChangeText={(studentname) => this.checkIfFieldsAreNotEmpty('studentName', studentname)}
                />
              </View>
            </View>
            <View style={styles.elementBox2}>
              <Text style={styles.headerLabel}>{strings('insert_data.insert_number')}</Text>
              <View style={[styles.inputFieldCoverView, styles.authInputFieldBottomBorder]}>

                <TextInput
                  ref='1'
                  maxLength={commonConstant.MAX_CHARACTER_PASSWORD}

                  style={styles.textInputView}
                  placeholder={strings('insert_data.insert_number_placeholder')}
                  returnKeyType='next'
                  keyboardType="numeric"
                  autoCapitalize="none"
                  onSubmitEditing={() => this.focusNextInputField('2')}
                  onChangeText={(studentNumber) => this.checkIfFieldsAreNotEmpty('studentNumber', studentNumber)}
                />
              </View>

            </View>
            <View style={[styles.elementBox2, { marginBottom: 30 }]}>
              <Text style={styles.headerLabel}>{strings('insert_data.insert_address')}</Text>
              <View style={[styles.inputFieldCoverView, styles.authInputFieldBottomBorder]}>

                <TextInput
                  ref='2'

                  maxLength={commonConstant.MAX_CHARACTER_EMAIL}
                  style={styles.textInputView}
                  placeholder={strings('insert_data.insert_address_placeholder')}
                  returnKeyType='done'
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={(studentAddress) => this.checkIfFieldsAreNotEmpty('address', studentAddress)}
                />
              </View>
            </View>
            <View style={styles.elementBox4}>
              <TouchableHighlight
                style={styles.fullWidth}
                onPress={this._onLoginButtonPressed}
                disabled={!this.state.enableLoginBtn}
                underlayColor="white">
                <View
                  style={
                    [
                      this.state.enableLoginBtn ? styles.primaryButton1 : styles.primaryDisableButton1,
                      styles.buttonRadius
                    ]
                  }>
                  <Text
                    style={
                      [
                        styles.buttonTextWhite,
                        fontFamilyStyles.robotoRegular,
                        this.state.enableLoginBtn ? commonStyles.secTextColor : styles.disabledTextColor,
                      ]
                    }>
                    {strings('insert_data.update_button')}</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>

        </View>
        <LoaderComponent showLoader={this.state.showActivityIndicator} />
        <CommonModal modalComponent={this.state.modalComponent} />
      </KeyboardAwareScrollView>
    );
  }
}




