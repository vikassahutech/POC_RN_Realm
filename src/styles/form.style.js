import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../themes/common.theme';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
var screen = require('Dimensions').get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'black',
  },
  header: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: theme.ROBOTO_LIGHT,
    color: theme.PRIMARY_TEXT_COLOR_LIGHT,
    textAlign: 'center',
    margin: 8,
    marginTop: 60,
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 8,
  },
  formView: {
    width: '80%',
    height: 280,
    justifyContent: 'space-between',

  },

  elementBox1: {
    marginBottom: 30,
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  elementBox2: {
    marginBottom: 30,
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  elementBox3: {
    marginTop: 10,
    marginBottom: 30,
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  headerLabel: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.ROBOTO_LIGHT,
    textAlign: 'center',
    color: theme.PRIMARY_TEXT_COLOR_LIGHT
  },
  icon: {
    flex: 1,
    height: 24,//30,
    //marginBottom:5,
    paddingRight: 5,
    resizeMode: 'contain',
    //backgroundColor:'red'
  },
  primaryButton1: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.SECONDARY_BTN_BACKGROUND_COLOR,
    height: 50,
    color: 'white',
    fontSize: 22
  },
  primaryButton2: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.PRIMARY_BTN_BACKGROUND_COLOR,
    height: 50,
    color: 'white',
    fontSize: 22
  },
  primaryDisableButton1: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.DISABLED_BTN_BACKGROUND_COLOR,
    height: 50,
    color: 'white',
    fontSize: 22
  },
  primaryDisableButton2: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A1A1A1',
    height: 50,
    color: 'white',
    fontSize: 22
  },
  buttonTextWhite: {
    color: 'white',
    fontSize: 22,
  },
  fullWidth: {
    width: '100%'
  },
  fullHeight: {
    height: '100%'
  },
  fullSize: {
    width: '100%',
    height: '100%'
  },
  verticalAlign: {
    justifyContent: 'center',
  },
  buttonRadius: {
    borderRadius: 5,
    overflow: 'hidden'
  },
  secondaryTransparentButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
  },
  buttonTextYellow: {
    color: theme.SECONDARY_BTN_BACKGROUND_COLOR,
    fontFamily: theme.ROBOTO_LIGHT,
    fontSize: 18,
    textDecorationLine: 'underline'
  },
  buttonTextBlue: {
    color: theme.PRIMARY_BTN_BACKGROUND_COLOR,
    fontFamily: theme.ROBOTO_REGULAR,
    fontSize: 18,
    textDecorationLine: 'underline'
  },
  lineView: {
    height: 1.0,
    width: '100%',
    backgroundColor: theme.INPUT_FIELD_BORDER_COLOR
  },
  inputFieldCoverView: {
    flexDirection: 'row',
    alignItems: 'center',//'flex-end' ,
    justifyContent: 'flex-start',
    marginTop: 5,
    width: '100%',
    height: 46
  },
  textInputView: {
    height: '100%',//40,
    marginLeft: 0, //10
    fontSize: theme.FONT_SIZE_INPUT_FIELD,
    //width:'90%',//280
    flex: 9,
    //backgroundColor:'blue',
    paddingLeft: 5,
    fontFamily: theme.ROBOTO_LIGHT,

  },

  
  backIconView: {
    width: '100%',
    height: 30,
    marginBottom: 5,
    marginTop: 26,
    paddingLeft: 30
  },
  backIcon: {
    height: 20,
    width: 20,
  },
  backButton: {
    width: 30,
    height: 30
  },

  // SET PASSWORD
  setPasswordformView: {
    width: '80%',
    height: 212,
    justifyContent: 'space-between',
    marginTop: 22,
  },
  descriptionText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.ROBOTO_LIGHT,
    // paddingLeft: 16,
    // paddingRight: 16,
    width: '84%',
    color: theme.PRIMARY_TEXT_COLOR_DARK,
    textAlign: 'center',
  },
  passwordStrengthCoverView: {
    width: '100%',
    //backgroundColor:'red',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  setPasswordHeaderLabel: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.ROBOTO_LIGHT,
    textAlign: 'left',
    color: theme.PRIMARY_TEXT_COLOR_LIGHT,
    flex: 7
  },
  passwordStrengthBgView: {
    height: 10,
    backgroundColor: theme.INPUT_FIELD_BORDER_COLOR,//'#eee',
    flex: 3,
    borderRadius: 5,
    overflow: 'hidden'
  },
  passwordWeak: {
    height: '100%',
    width: '33%',
    backgroundColor: theme.PASSWORD_WEAK
  },
  passwordMedium: {
    height: '100%',
    width: '66%',
    backgroundColor: theme.PASSWORD_MEDIUM
  },
  passwordStrong: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.PASSWORD_STRONG
  },

 
  flagCoverView: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    marginBottom: 0,
    paddingRight: 0,
  },
  flagIcon: {
    width: '80%',
    height: '80%',
    //resizeMode: 'contain',
  },
  flagImgView: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  downArrow: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
  },
  countryDropdownView: {
    width: '80%',
    height: 200,
  },
  showDropDown: {
    display: 'none'
  },
  hideDropDown: {
    display: 'flex'
  },
  mobileNumberField: {
    width: '100%',
    height: '100%',
    fontSize: theme.FONT_SIZE_INPUT_FIELD,
    fontFamily: theme.ROBOTO_LIGHT,
    justifyContent: 'center'
  },
  pickerRowcontainer: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 0,
    paddingLeft: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pickerText: {
    marginLeft: 12,
    fontSize: theme.FONT_SIZE_MEDIUM,
    flex: 8,
  },
  pickerImage: {
    height: 30,
    width: 30,
    flex: 2
  },
  pickerSeparator: {
    flex: 1,
    height: 0.5,
    backgroundColor: theme.INPUT_FIELD_BORDER_COLOR,
  },

  //  VERIFY MOBILE NUMBER
  VerifyMobileformView: {
    width: '80%',
    height: 55,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0,
    //backgroundColor:'blue',
    padding: 0
  },
  otpFieldStyle: {
    backgroundColor: 'transparent',
    color: theme.PRIMARY_TEXT_COLOR_DARK,
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: theme.ROBOTO_REGULAR,
    textAlign: 'center',
    borderRadius: 0,
    marginLeft: 3,
    marginRight: 3,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: theme.INPUT_FIELD_BORDER_COLOR,
    marginHorizontal: 2,
    marginVertical: 2,
    padding: 0
  },
  otpInputStyle: {
    color: 'black'
  },
  resendButton: {
    borderColor: '#979797',
    borderWidth: 1,
    borderRadius: 7,
    marginTop: 60,
    height: 40,
    width: 146,
    justifyContent: 'center'
  },
  resendButtonText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.ROBOTO_LIGHT,
    color: '#979797',
    textAlign: 'center'
  },
  problemReceivingCode: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },

  
  boldTitle: {
    fontWeight: 'bold',
    fontFamily: theme.ROBOTO_MEDIUM,
  },
  floatView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.35)',
    flexDirection: 'column',
    alignItems: 'center'
  },
  closeWebViewBtn: {
    width: '90%',
    height: 30,
    marginBottom: 5,
    marginTop: 50,
    paddingRight: 0,
    alignItems: 'flex-end'
  },
  webViewPopup: {
    width: '90%',
    height: screenHeight - 120,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: "hidden",
    padding: 10
  },
  webViewStyle: {
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
    height: "100%"
  },
  webViewShow: {
    position: 'absolute',
    display: 'flex',
  },
  webViewHide: {
    position: 'relative',
    display: 'none',
  },
  leftHeaderWithoutBackBtn: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: theme.ROBOTO_LIGHT,
    color: theme.PRIMARY_TEXT_COLOR_LIGHT,
    margin: 30,
    marginBottom: 20,
    marginTop: 50,
    width: '100%',
    paddingLeft: 30,
  },

  roundedContainer: {
    width: screenWidth * 9 / 10,
    //height:screenHeight*8/10, //comment this for dynamic height
    backgroundColor: 'white',
    borderRadius: 14,
    overflow: "hidden",
    alignItems: 'center'
  },
  descriptionTextStyle: {
    fontSize: 18,
    fontFamily: theme.ROBOTO_LIGHT,
    color: theme.PRIMARY_TEXT_COLOR_LIGHT,
    marginTop: 15,
    marginBottom: 35,//25,
    width: '80%',
    //height:40,
    textAlign: 'center'
  },
  dashboardTextInputView: {
    height: 64,
    fontSize: 20,
    width: '90%',
    //backgroundColor:'blue',
    fontFamily: theme.ROBOTO_LIGHT,
    borderColor: theme.INPUT_FIELD_BORDER_COLOR,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    textAlign: 'center',

  },
  topMarginAboveBtn: {
    marginTop: 50,
    marginBottom: 55//theme.DEFAULT_LARGE_MARGIN,
  },
  btnToTextfieldMargin: {
    marginTop: 130,
    //bottom:10,
  },
  width90: {
    width: '90%',
  },
  dashboardIconStyle: {
    width: 100,
    height: 100,
    marginTop: theme.DEFAULT_MARGIN,
    marginBottom: theme.DEFAULT_MARGIN,
  },
  topGoalNameStyle: {
    fontFamily: theme.ROBOTO_LIGHT,
    fontSize: 20,
    color: theme.PRIMARY_TEXT_COLOR_DARK,
    marginTop: 15,
    width: '100%',
    height: 40,
    textAlign: 'center',
  },
  // SET GOAL DATE SCREEN
  dateTouchableView: {
    height: 96,
    width: '90%',
  },
  dateContainerView: {
    height: '100%',
    fontSize: 20,
    width: '100%',
    flex: 1,
    //backgroundColor:'blue',
    fontFamily: theme.ROBOTO_LIGHT,
    borderColor: theme.INPUT_FIELD_BORDER_COLOR,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    textAlign: 'center',
    flexDirection: 'row'
  },
  dateElement: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
    //backgroundColor:'red'
  },
  dateElementBorder: {
    borderColor: theme.INPUT_FIELD_BORDER_COLOR,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  dateElementPlaceholder: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.ROBOTO_LIGHT,
    color: '#A1A1A1',
    width: 46,
    height: 30,
    marginTop: 15,
    textAlign: 'center',
  },
  dateElementValue: {
    fontSize: theme.FONT_SIZE_20,
    fontFamily: theme.ROBOTO_LIGHT,
    color: theme.PRIMARY_TEXT_COLOR_DARK,
    width: 55,
    textAlign: 'center',
  },
  // Flat style date
  dateSelectorField: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    //backgroundColor:'red',
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_LARGE,
    fontFamily: theme.ROBOTO_LIGHT,
    color: theme.PRIMARY_TEXT_COLOR_DARK,
  },
  dateTouchableViewFlatStyle: {
    height: 64,
    width: '90%',
    borderColor: theme.INPUT_FIELD_BORDER_COLOR,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  stateDropdownView: {
    width: screenWidth * 0.8,
    //height: 200,
    height: screenHeight <= 592 ? 100 : 175 //for less than 4.5 inch screen size support
  },
  statePickerText: {
    marginLeft: 12,
    fontSize: theme.FONT_SIZE_MEDIUM,
    //color:theme.PRIMARY_TEXT_COLOR_LIGHT,
    flex: 1, //8
    height: 30
  },
  disabledTextColor: {
    color: "#A9A9A9"
  },

 

  // MENU SCREEN
  menuScreenMainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  },
  menuView: {
    width: screenWidth * 8 / 10,
    marginBottom: Platform.OS === 'ios' ? 10 : 70
    //height:300, 
    //backgroundColor:'white'
  },
  menuSectionText: {
    marginTop: 50,
    marginBottom: 15,
    fontFamily: theme.ROBOTO_MEDIUM,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.PRIMARY_BTN_BACKGROUND_COLOR
  },
  menuRow: {
    height: 48,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    //backgroundColor: 'skyblue',
    borderBottomColor: '#979797',
    borderBottomWidth: 1
  },
  menuIcon: {
    flex: 1,
    height: 24,
    paddingRight: 5,
    resizeMode: 'contain',
    //backgroundColor:'red'
  },
  menuSignoutIcon: {
    flex: 1,
    height: 20,
    paddingRight: 5,
    resizeMode: 'contain',
    //backgroundColor:'red'
  },
  menuText: {
    //height: '100%',
    marginLeft: 0,
    fontSize: theme.FONT_SIZE_INPUT_FIELD,
    flex: 9,
    //backgroundColor:'blue',
    paddingLeft: 14,
    fontFamily: theme.ROBOTO_LIGHT,
    color: '#ffffff'
  },
  menuNoBorder: {
    borderBottomWidth: 0
  },
  menuAppSettingSection: {
    marginTop: 20,
    marginBottom: 15,
    fontFamily: theme.ROBOTO_MEDIUM,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.PRIMARY_BTN_BACKGROUND_COLOR,
    flexDirection: "row",
  },
  menuAppSettingText: {
    fontFamily: theme.ROBOTO_MEDIUM,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.PRIMARY_BTN_BACKGROUND_COLOR,
    width: '50%',
    textAlign: "left",
  },
  menuVersionNumberText: {
    fontFamily: theme.ROBOTO_MEDIUM,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: '#ffffff',
    width: '50%',
    textAlign: "right",
  },
  notificationBadge: {
    fontFamily: theme.ROBOTO_REGULAR,
    fontSize: theme.FONT_SIZE_SMALL,
    color: '#000000',
    textAlign: "center",
    backgroundColor: '#7ED321',
    borderRadius: 11,
    width: 40,
    paddingVertical: 3,
    overflow: 'hidden'
  },
  badgeContainer: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'flex-end'
  },
  authInputFieldBottomBorder: {
    borderBottomWidth: 1,
    borderColor: theme.INPUT_FIELD_BORDER_COLOR
  },
 
  fontSize24: {
    fontSize: 24
  },

  /* Invest.Summary.Instrument Screen */
  SingleLineBackgroundColor: {
    backgroundColor: '#C4C4C4'
  },
  margin20Top: {
    marginTop: 20
  },
  margin20Bottom: {
    marginBottom: 20
  },
  margin20Left: {
    marginLeft: 20
  },
  margin20Right: {
    marginRight: 20
  },
  margin15Top: {
    marginTop: 15
  },
  margin15Bottom: {
    marginBottom: 15
  },
  margin15Left: {
    marginLeft: 15
  },
  margin15Right: {
    marginRight: 15
  },
  margin30Top: {
    marginTop: 30
  },

  margin10Top: {
    marginTop: 10
  },
  margin10Bottom: {
    marginBottom: 10
  },
  margin10Left: {
    marginLeft: 10
  },
  margin10Right: {
    marginRight: 10
  },
  margin5Top: {
    marginTop: 5
  },
  margin5Bottom: {
    marginBottom: 5
  },
  margin5Left: {
    marginLeft: 5
  },
  margin5Right: {
    marginRight: 5
  },
  fontSize22: {
    fontSize: 22
  },
  margin30Top: {
    marginTop: 30
  },
  margin20Top: {
    marginTop: 20
  },
  margin25Top: {
    marginTop: 25
  },
});

export default styles;
