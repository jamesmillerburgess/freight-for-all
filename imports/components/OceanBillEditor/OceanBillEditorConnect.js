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

export const maybe = (thing, fallback) => thing || fallback || '';

export const mapStateToProps = ({ oceanBillEditor }) => ({
  document: {
    shipper: maybe(oceanBillEditor.shipper),
    consignee: maybe(oceanBillEditor.consignee),
    notifyParty: maybe(oceanBillEditor.notifyParty),
    preCarriageBy: maybe(oceanBillEditor.preCarriageBy),
    placeOfReceipt: maybe(oceanBillEditor.placeOfReceipt),
    vessel: maybe(oceanBillEditor.vessel),
    portOfLoading: maybe(oceanBillEditor.portOfLoading),
    portOfDischarge: maybe(oceanBillEditor.portOfDischarge),
    placeOfDelivery: maybe(oceanBillEditor.placeOfDelivery),
    customerReference: maybe(oceanBillEditor.customerReference),
    billOfLadingNumber: maybe(oceanBillEditor.billOfLadingNumber),
    carrier: maybe(oceanBillEditor.carrier),
    billType: maybe(oceanBillEditor.billType),
    terms: maybe(oceanBillEditor.terms, defaultTerms),
    description: maybe(oceanBillEditor.description),
    packages1: maybe(oceanBillEditor.packages1),
    packages2: maybe(oceanBillEditor.packages2),
    packages3: maybe(oceanBillEditor.packages3),
    packages4: maybe(oceanBillEditor.packages4),
    packages5: maybe(oceanBillEditor.packages5),
    grossWeight1: maybe(oceanBillEditor.grossWeight1),
    grossWeight2: maybe(oceanBillEditor.grossWeight2),
    grossWeight3: maybe(oceanBillEditor.grossWeight3),
    grossWeight4: maybe(oceanBillEditor.grossWeight4),
    grossWeight5: maybe(oceanBillEditor.grossWeight5),
    measurement1: maybe(oceanBillEditor.measurement1),
    measurement2: maybe(oceanBillEditor.measurement2),
    measurement3: maybe(oceanBillEditor.measurement3),
    measurement4: maybe(oceanBillEditor.measurement4),
    measurement5: maybe(oceanBillEditor.measurement5),
    declaredValue: maybe(oceanBillEditor.declaredValue),
    totalContainersPackages: maybe(oceanBillEditor.totalContainersPackages),
    charge1: maybe(oceanBillEditor.charge1),
    charge2: maybe(oceanBillEditor.charge2),
    charge3: maybe(oceanBillEditor.charge3),
    charge4: maybe(oceanBillEditor.charge4),
    charge5: maybe(oceanBillEditor.charge5),
    revenueTons1: maybe(oceanBillEditor.revenueTons1),
    revenueTons2: maybe(oceanBillEditor.revenueTons2),
    revenueTons3: maybe(oceanBillEditor.revenueTons3),
    revenueTons4: maybe(oceanBillEditor.revenueTons4),
    revenueTons5: maybe(oceanBillEditor.revenueTons5),
    rate1: maybe(oceanBillEditor.rate1),
    rate2: maybe(oceanBillEditor.rate2),
    rate3: maybe(oceanBillEditor.rate3),
    rate4: maybe(oceanBillEditor.rate4),
    rate5: maybe(oceanBillEditor.rate5),
    per1: maybe(oceanBillEditor.per1),
    per2: maybe(oceanBillEditor.per2),
    per3: maybe(oceanBillEditor.per3),
    per4: maybe(oceanBillEditor.per4),
    per5: maybe(oceanBillEditor.per5),
    prepaid1: maybe(oceanBillEditor.prepaid1),
    prepaid2: maybe(oceanBillEditor.prepaid2),
    prepaid3: maybe(oceanBillEditor.prepaid3),
    prepaid4: maybe(oceanBillEditor.prepaid4),
    prepaid5: maybe(oceanBillEditor.prepaid5),
    collect1: maybe(oceanBillEditor.collect1),
    collect2: maybe(oceanBillEditor.collect2),
    collect3: maybe(oceanBillEditor.collect3),
    collect4: maybe(oceanBillEditor.collect4),
    collect5: maybe(oceanBillEditor.collect5),
    exchangeRate: maybe(oceanBillEditor.exchangeRate),
    prepaidAt: maybe(oceanBillEditor.prepaidAt),
    payableAt: maybe(oceanBillEditor.payableAt),
    placeAndDateOfIssue: maybe(oceanBillEditor.placeAndDateOfIssue),
    totalPrepaidInLocalCurrency: maybe(
      oceanBillEditor.totalPrepaidInLocalCurrency
    ),
    numberOfWaybills: maybe(oceanBillEditor.numberOfWaybills),
    shippedOnBoardTheVessel: maybe(oceanBillEditor.shippedOnBoardTheVessel),
    date: maybe(oceanBillEditor.date),
    by: maybe(oceanBillEditor.by),
  },
});

export const mapDispatchToProps = dispatch => {
  const dis = prop => val => dispatch(setOceanBillProp(prop, val));
  return {
    setShipper: dis('shipper'),
    setConsignee: dis('consignee'),
    setNotifyParty: dis('notifyParty'),
    setPreCarriageBy: dis('preCarriageBy'),
    setPlaceOfReceipt: dis('placeOfReceipt'),
    setVessel: dis('vessel'),
    setPortOfLoading: dis('portOfLoading'),
    setPortOfDischarge: dis('portOfDischarge'),
    setPlaceOfDelivery: dis('placeOfDelivery'),
    setCustomerReference: dis('customerReference'),
    setBillOfLadingNumber: dis('billOfLadingNumber'),
    setCarrier: dis('carrier'),
    setBillType: dis('billType'),
    setTerms: dis('terms'),
    setDescription: dis('description'),
    setPackages1: dis('packages1'),
    setPackages2: dis('packages2'),
    setPackages3: dis('packages3'),
    setPackages4: dis('packages4'),
    setPackages5: dis('packages5'),
    setGrossWeight1: dis('grossWeight1'),
    setGrossWeight2: dis('grossWeight2'),
    setGrossWeight3: dis('grossWeight3'),
    setGrossWeight4: dis('grossWeight4'),
    setGrossWeight5: dis('grossWeight5'),
    setMeasurement1: dis('measurement1'),
    setMeasurement2: dis('measurement2'),
    setMeasurement3: dis('measurement3'),
    setMeasurement4: dis('measurement4'),
    setMeasurement5: dis('measurement5'),
    setDeclaredValue: dis('declaredValue'),
    setTotalContainersPackages: dis('totalContainersPackages'),
    setCharge1: dis('charge1'),
    setCharge2: dis('charge2'),
    setCharge3: dis('charge3'),
    setCharge4: dis('charge4'),
    setCharge5: dis('charge5'),
    setRevenueTons1: dis('revenueTons1'),
    setRevenueTons2: dis('revenueTons2'),
    setRevenueTons3: dis('revenueTons3'),
    setRevenueTons4: dis('revenueTons4'),
    setRevenueTons5: dis('revenueTons5'),
    setRate1: dis('rate1'),
    setRate2: dis('rate2'),
    setRate3: dis('rate3'),
    setRate4: dis('rate4'),
    setRate5: dis('rate5'),
    setPer1: dis('per1'),
    setPer2: dis('per2'),
    setPer3: dis('per3'),
    setPer4: dis('per4'),
    setPer5: dis('per5'),
    setPrepaid1: dis('prepaid1'),
    setPrepaid2: dis('prepaid2'),
    setPrepaid3: dis('prepaid3'),
    setPrepaid4: dis('prepaid4'),
    setPrepaid5: dis('prepaid5'),
    setCollect1: dis('collect1'),
    setCollect2: dis('collect2'),
    setCollect3: dis('collect3'),
    setCollect4: dis('collect4'),
    setCollect5: dis('collect5'),
    setExchangeRate: dis('exchangeRate'),
    setPrepaidAt: dis('prepaidAt'),
    setPayableAt: dis('payableAt'),
    setPlaceAndDateOfIssue: dis('placeAndDateOfIssue'),
    setTotalPrepaidInLocalCurrency: dis('totalPrepaidInLocalCurrency'),
    setNumberOfWaybills: dis('numberOfWaybills'),
    setShippedOnBoardTheVessel: dis('shippedOnBoardTheVessel'),
    setDate: dis('date'),
    setBy: dis('by'),
  };
};

const OceanBillEditorConnect = connect(mapStateToProps, mapDispatchToProps)(
  OceanBillEditorDisplay
);

export default OceanBillEditorConnect;
