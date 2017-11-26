import { connect } from 'react-redux';

import { setOceanBillProp } from '../../state/actionCreators';
import OceanBillEditorDisplay from './OceanBillEditorDisplay';

const defaultTerms =
  'Received by the Carrier from the Shipper on the terms ' +
  'hereof the total number of Containers or packages said to ' +
  'contain Goods enumerated below in the box marked "Total ' +
  'No. of Containers or Packages (in words)" in apparent ' +
  'good order and condition (unless otherwise indicated ' +
  'herein) for Carriage from the Place of Receipt or the ' +
  'Port of Loading to the Port of Discharge or the Place ' +
  'of Delivery.\n' +
  "In consideration of Carrier's acceptance of the " +
  'Containers or packages, the Shipper (on its own behalf ' +
  'and on behalf of all persons included in the definition ' +
  'of "Merchant" contained in the applicable ' +
  'standard form bill of lading) agrees that all terms on ' +
  'the face and back hereof apply. THE MERCHANT SPECIFICALLY ' +
  'AGREES THAT ITS ATTENTION HAS BEEN DRAWN TO AND THAT IT ' +
  'HAS ACCEPTED THE APPLICABLE FREIGHT FOR ALL STANDARD FORM ' +
  'BILL OF LADING ("THE CARRIER\'S B/L"), THE CARRIER\'S ' +
  'APPLICABLE TARIFF(S), AND THE CMI UNIFORM RULES FOR SEA ' +
  'WAYBILLS AS REFERRED TO IN AND INCORPORATED HEREIN BY ' +
  'CLAUSE 1 ON THE REVERSE HEREOF.\n' +
  'This waybill supersedes any prior arrangements, ' +
  'agreements or representations by the Carrier, its agent ' +
  'or any other person, save for service contracts between ' +
  'the parties, and where applicable valid under the United ' +
  'States Shipping Act.';

const mapStateToProps = ({ oceanBillEditor }) => ({
  document: {
    shipper: oceanBillEditor.shipper || '',
    consignee: oceanBillEditor.consignee || '',
    notifyParty: oceanBillEditor.notifyParty || '',
    preCarriageBy: oceanBillEditor.preCarriageBy || '',
    placeOfReceipt: oceanBillEditor.placeOfReceipt || '',
    vessel: oceanBillEditor.vessel || '',
    portOfLoading: oceanBillEditor.portOfLoading || '',
    portOfDischarge: oceanBillEditor.portOfDischarge || '',
    placeOfDelivery: oceanBillEditor.placeOfDelivery || '',
    customerReference: oceanBillEditor.customerReference || '',
    billOfLadingNumber: oceanBillEditor.billOfLadingNumber || '',
    carrier: oceanBillEditor.carrier || '',
    billType: oceanBillEditor.billType || '',
    terms: oceanBillEditor.terms || defaultTerms,
    description: oceanBillEditor.description || '',
    packages1: oceanBillEditor.packages1 || '',
    packages2: oceanBillEditor.packages2 || '',
    packages3: oceanBillEditor.packages3 || '',
    packages4: oceanBillEditor.packages4 || '',
    packages5: oceanBillEditor.packages5 || '',
    grossWeight1: oceanBillEditor.grossWeight1 || '',
    grossWeight2: oceanBillEditor.grossWeight2 || '',
    grossWeight3: oceanBillEditor.grossWeight3 || '',
    grossWeight4: oceanBillEditor.grossWeight4 || '',
    grossWeight5: oceanBillEditor.grossWeight5 || '',
    measurement1: oceanBillEditor.measurement1 || '',
    measurement2: oceanBillEditor.measurement2 || '',
    measurement3: oceanBillEditor.measurement3 || '',
    measurement4: oceanBillEditor.measurement4 || '',
    measurement5: oceanBillEditor.measurement5 || '',
    declaredValue: oceanBillEditor.declaredValue || '',
    totalContainersPackages: oceanBillEditor.totalContainersPackages || '',
    charge1: oceanBillEditor.charge1 || '',
    charge2: oceanBillEditor.charge2 || '',
    charge3: oceanBillEditor.charge3 || '',
    charge4: oceanBillEditor.charge4 || '',
    charge5: oceanBillEditor.charge5 || '',
    revenueTons1: oceanBillEditor.revenueTons1 || '',
    revenueTons2: oceanBillEditor.revenueTons2 || '',
    revenueTons3: oceanBillEditor.revenueTons3 || '',
    revenueTons4: oceanBillEditor.revenueTons4 || '',
    revenueTons5: oceanBillEditor.revenueTons5 || '',
    rate1: oceanBillEditor.rate1 || '',
    rate2: oceanBillEditor.rate2 || '',
    rate3: oceanBillEditor.rate3 || '',
    rate4: oceanBillEditor.rate4 || '',
    rate5: oceanBillEditor.rate5 || '',
    per1: oceanBillEditor.per1 || '',
    per2: oceanBillEditor.per2 || '',
    per3: oceanBillEditor.per3 || '',
    per4: oceanBillEditor.per4 || '',
    per5: oceanBillEditor.per5 || '',
    prepaid1: oceanBillEditor.prepaid1 || '',
    prepaid2: oceanBillEditor.prepaid2 || '',
    prepaid3: oceanBillEditor.prepaid3 || '',
    prepaid4: oceanBillEditor.prepaid4 || '',
    prepaid5: oceanBillEditor.prepaid5 || '',
    collect1: oceanBillEditor.collect1 || '',
    collect2: oceanBillEditor.collect2 || '',
    collect3: oceanBillEditor.collect3 || '',
    collect4: oceanBillEditor.collect4 || '',
    collect5: oceanBillEditor.collect5 || '',
    exchangeRate: oceanBillEditor.exchangeRate || '',
    prepaidAt: oceanBillEditor.prepaidAt || '',
    payableAt: oceanBillEditor.payableAt || '',
    placeAndDateOfIssue: oceanBillEditor.placeAndDateOfIssue || '',
    totalPrepaidInLocalCurrency:
      oceanBillEditor.totalPrepaidInLocalCurrency || '',
    numberOfWaybills: oceanBillEditor.numberOfWaybills || '',
    shippedOnBoardTheVessel: oceanBillEditor.shippedOnBoardTheVessel || '',
    date: oceanBillEditor.date || '',
    by: oceanBillEditor.by || '',
    movement: {},
    cargo: {
      packageLines: [],
    },
  },
});

const mapDispatchToProps = dispatch => ({
  setShipper: val => dispatch(setOceanBillProp('shipper', val)),
  setConsignee: val => dispatch(setOceanBillProp('consignee', val)),
  setNotifyParty: val => dispatch(setOceanBillProp('notifyParty', val)),
  setPreCarriageBy: val => dispatch(setOceanBillProp('preCarriageBy', val)),
  setPlaceOfReceipt: val => dispatch(setOceanBillProp('placeOfReceipt', val)),
  setVessel: val => dispatch(setOceanBillProp('vessel', val)),
  setPortOfLoading: val => dispatch(setOceanBillProp('portOfLoading', val)),
  setPortOfDischarge: val => dispatch(setOceanBillProp('portOfDischarge', val)),
  setPlaceOfDelivery: val => dispatch(setOceanBillProp('placeOfDelivery', val)),
  setCustomerReference: val =>
    dispatch(setOceanBillProp('customerReference', val)),
  setBillOfLadingNumber: val =>
    dispatch(setOceanBillProp('billOfLadingNumber', val)),
  setCarrier: val => dispatch(setOceanBillProp('carrier', val)),
  setBillType: val => dispatch(setOceanBillProp('billType', val)),
  setTerms: val => dispatch(setOceanBillProp('terms', val)),
  setDescription: val => dispatch(setOceanBillProp('description', val)),
  setPackages1: val => dispatch(setOceanBillProp('packages1', val)),
  setPackages2: val => dispatch(setOceanBillProp('packages2', val)),
  setPackages3: val => dispatch(setOceanBillProp('packages3', val)),
  setPackages4: val => dispatch(setOceanBillProp('packages4', val)),
  setPackages5: val => dispatch(setOceanBillProp('packages5', val)),
  setGrossWeight1: val => dispatch(setOceanBillProp('grossWeight1', val)),
  setGrossWeight2: val => dispatch(setOceanBillProp('grossWeight2', val)),
  setGrossWeight3: val => dispatch(setOceanBillProp('grossWeight3', val)),
  setGrossWeight4: val => dispatch(setOceanBillProp('grossWeight4', val)),
  setGrossWeight5: val => dispatch(setOceanBillProp('grossWeight5', val)),
  setMeasurement1: val => dispatch(setOceanBillProp('measurement1', val)),
  setMeasurement2: val => dispatch(setOceanBillProp('measurement2', val)),
  setMeasurement3: val => dispatch(setOceanBillProp('measurement3', val)),
  setMeasurement4: val => dispatch(setOceanBillProp('measurement4', val)),
  setMeasurement5: val => dispatch(setOceanBillProp('measurement5', val)),
  setDeclaredValue: val => dispatch(setOceanBillProp('declaredValue', val)),
  setTotalContainersPackages: val =>
    dispatch(setOceanBillProp('totalContainersPackages', val)),
  setCharge1: val => dispatch(setOceanBillProp('charge1', val)),
  setCharge2: val => dispatch(setOceanBillProp('charge2', val)),
  setCharge3: val => dispatch(setOceanBillProp('charge3', val)),
  setCharge4: val => dispatch(setOceanBillProp('charge4', val)),
  setCharge5: val => dispatch(setOceanBillProp('charge5', val)),
  setRevenueTons1: val => dispatch(setOceanBillProp('revenueTons1', val)),
  setRevenueTons2: val => dispatch(setOceanBillProp('revenueTons2', val)),
  setRevenueTons3: val => dispatch(setOceanBillProp('revenueTons3', val)),
  setRevenueTons4: val => dispatch(setOceanBillProp('revenueTons4', val)),
  setRevenueTons5: val => dispatch(setOceanBillProp('revenueTons5', val)),
  setRate1: val => dispatch(setOceanBillProp('rate1', val)),
  setRate2: val => dispatch(setOceanBillProp('rate2', val)),
  setRate3: val => dispatch(setOceanBillProp('rate3', val)),
  setRate4: val => dispatch(setOceanBillProp('rate4', val)),
  setRate5: val => dispatch(setOceanBillProp('rate5', val)),
  setPer1: val => dispatch(setOceanBillProp('per1', val)),
  setPer2: val => dispatch(setOceanBillProp('per2', val)),
  setPer3: val => dispatch(setOceanBillProp('per3', val)),
  setPer4: val => dispatch(setOceanBillProp('per4', val)),
  setPer5: val => dispatch(setOceanBillProp('per5', val)),
  setPrepaid1: val => dispatch(setOceanBillProp('prepaid1', val)),
  setPrepaid2: val => dispatch(setOceanBillProp('prepaid2', val)),
  setPrepaid3: val => dispatch(setOceanBillProp('prepaid3', val)),
  setPrepaid4: val => dispatch(setOceanBillProp('prepaid4', val)),
  setPrepaid5: val => dispatch(setOceanBillProp('prepaid5', val)),
  setCollect1: val => dispatch(setOceanBillProp('collect1', val)),
  setCollect2: val => dispatch(setOceanBillProp('collect2', val)),
  setCollect3: val => dispatch(setOceanBillProp('collect3', val)),
  setCollect4: val => dispatch(setOceanBillProp('collect4', val)),
  setCollect5: val => dispatch(setOceanBillProp('collect5', val)),
  setExchangeRate: val => dispatch(setOceanBillProp('exchangeRate', val)),
  setPrepaidAt: val => dispatch(setOceanBillProp('prepaidAt', val)),
  setPayableAt: val => dispatch(setOceanBillProp('payableAt', val)),
  setPlaceAndDateOfIssue: val =>
    dispatch(setOceanBillProp('placeAndDateOfIssue', val)),
  setTotalPrepaidInLocalCurrency: val =>
    dispatch(setOceanBillProp('totalPrepaidInLocalCurrency', val)),
  setNumberOfWaybills: val =>
    dispatch(setOceanBillProp('numberOfWaybills', val)),
  setShippedOnBoardTheVessel: val =>
    dispatch(setOceanBillProp('shippedOnBoardTheVessel', val)),
  setDate: val => dispatch(setOceanBillProp('date', val)),
  setBy: val => dispatch(setOceanBillProp('by', val)),
});

const OceanBillEditorConnect = connect(mapStateToProps, mapDispatchToProps)(
  OceanBillEditorDisplay
);

export default OceanBillEditorConnect;
