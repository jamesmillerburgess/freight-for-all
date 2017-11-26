import React from 'react';
import './OceanBillEditor.scss';
import OceanBillDocument from '../../documents/OceanBillDocument';
import InputField from '../InputField/InputField';
import TextareaField from '../TextareaField/TextareaField';

export const handlePDF = url => window.open(url);

export const OceanBillButton = props => (
  <button
    className="button-submit"
    onClick={() => OceanBillDocument(props.document, handlePDF)}
  >
    GENERATE PDF
  </button>
);

const OceanBillEditorDisplay = props => (
  <div className="page">
    <div className="page-title">Ocean Bill of Lading Generator</div>
    <div className="document-wrapper">
      <div className="document ocean-bill">
        <div className="ocean-bill-upper-columns">
          <div className="ocean-bill-left-column">
            <div className="ocean-bill-parties">
              <div className="ocean-bill-party">
                <div className="label">SHIPPER</div>
                <TextareaField
                  value={props.document.shipper}
                  onChange={props.setShipper}
                />
              </div>
              <div className="ocean-bill-party">
                <div className="label">CONSIGNEE</div>
                <TextareaField
                  value={props.document.consignee}
                  onChange={props.setConsignee}
                />
              </div>
              <div className="ocean-bill-party">
                <div className="label">NOTIFY PARTY</div>
                <TextareaField
                  value={props.document.notifyParty}
                  onChange={props.setNotifyParty}
                />
              </div>
            </div>
            <div className="ocean-bill-routing">
              <div className="ocean-bill-routing-row">
                <div className="ocean-bill-routing-field">
                  <div className="label">PRE-CARRIAGE BY</div>
                  <InputField
                    value={props.document.preCarriageBy}
                    onChange={props.setPreCarriageBy}
                  />
                </div>
                <div className="ocean-bill-routing-field">
                  <div className="label">PLACE OF RECEIPT</div>
                  <InputField
                    value={props.document.placeOfReceipt}
                    onChange={props.setPlaceOfReceipt}
                  />
                </div>
              </div>
              <div className="ocean-bill-routing-row">
                <div className="ocean-bill-routing-field">
                  <div className="label">VESSEL</div>
                  <InputField
                    value={props.document.vessel}
                    onChange={props.setVessel}
                  />
                </div>
                <div className="ocean-bill-routing-field">
                  <div className="label">PORT OF LOADING</div>
                  <InputField
                    value={props.document.portOfLoading}
                    onChange={props.setPortOfLoading}
                  />
                </div>
              </div>
              <div className="ocean-bill-routing-row">
                <div className="ocean-bill-routing-field">
                  <div className="label">PORT OF DISCHARGE</div>
                  <InputField
                    value={props.document.portOfDischarge}
                    onChange={props.setPortOfDischarge}
                  />
                </div>
                <div className="ocean-bill-routing-field">
                  <div className="label">PLACE OF DELIVERY</div>
                  <InputField
                    value={props.document.placeOfDelivery}
                    onChange={props.setPlaceOfDelivery}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ocean-bill-right-column">
            <div className="ocean-bill-routing-row">
              <div className="ocean-bill-routing-field">
                <div className="label">CUSTOMER REFERENCE</div>
                <InputField
                  value={props.document.customerReference}
                  onChange={props.setCustomerReference}
                />
              </div>
              <div className="ocean-bill-routing-field">
                <div className="label">BILL OF LADING NUMBER</div>
                <InputField
                  value={props.document.billOfLadingNumber}
                  onChange={props.setBillOfLadingNumber}
                />
              </div>
            </div>
            <div className="ocean-bill-carrier">
              <TextareaField
                value={props.document.carrier}
                onChange={props.setCarrier}
              />
            </div>
            <div className="ocean-bill-type">
              <InputField
                value={props.document.billType}
                onChange={props.setBillType}
              />
            </div>
            <div className="ocean-bill-terms">
              <TextareaField
                value={props.document.terms}
                onChange={props.setTerms}
              />
            </div>
          </div>
        </div>
        <div className="ocean-bill-cargo">
          <div className="ocean-bill-description">
            <div className="label">
              DESCRIPTION OF GOODS, MARKS AND NUMBERS, CONTAINER NUMBERS
            </div>
            <TextareaField
              value={props.document.description}
              onChange={props.setDescription}
            />
          </div>
          <div className="ocean-bill-packages">
            <div className="label">PACKAGES</div>
            <InputField
              value={props.document.packages1}
              onChange={props.setPackages1}
            />
            <InputField
              value={props.document.packages2}
              onChange={props.setPackages2}
            />
            <InputField
              value={props.document.packages3}
              onChange={props.setPackages3}
            />
            <InputField
              value={props.document.packages4}
              onChange={props.setPackages4}
            />
            <InputField
              value={props.document.packages5}
              onChange={props.setPackages5}
            />
          </div>
          <div className="ocean-bill-gross-weight">
            <div className="label">GROSS WEIGHT</div>
            <InputField
              value={props.document.grossWeight1}
              onChange={props.setGrossWeight1}
            />
            <InputField
              value={props.document.grossWeight2}
              onChange={props.setGrossWeight2}
            />
            <InputField
              value={props.document.grossWeight3}
              onChange={props.setGrossWeight3}
            />
            <InputField
              value={props.document.grossWeight4}
              onChange={props.setGrossWeight4}
            />
            <InputField
              value={props.document.grossWeight5}
              onChange={props.setGrossWeight5}
            />
          </div>
          <div className="ocean-bill-measurement">
            <div className="label">MEASUREMENT</div>
            <InputField
              value={props.document.measurement1}
              onChange={props.setMeasurement1}
            />
            <InputField
              value={props.document.measurement2}
              onChange={props.setMeasurement2}
            />
            <InputField
              value={props.document.measurement3}
              onChange={props.setMeasurement3}
            />
            <InputField
              value={props.document.measurement4}
              onChange={props.setMeasurement4}
            />
            <InputField
              value={props.document.measurement5}
              onChange={props.setMeasurement5}
            />
          </div>
        </div>
        <div className="ocean-bill-declared-value">
          <InputField
            value={props.document.declaredValue}
            onChange={props.setDeclaredValue}
          />
          <div className="label-group">
            <div className="label">DECLARED VALUE</div>
            <div className="label">
              IF SHIPPER ENTERS A VALUE, THE AD VALOREM RATE WILL BE CHARGED
              (SEE CLAUSE 24 OF CARRIERS STANDARD BILL OF LADING)
            </div>
          </div>
        </div>
        <div className="ocean-bill-total-containers-packages">
          <div className="label">
            TOTAL NO. OF CONTAINERS OR PACKAGES (IN WORDS)
          </div>
          <InputField
            value={props.document.totalContainersPackages}
            onChange={props.setTotalContainersPackages}
          />
        </div>
        <div className="ocean-bill-charges">
          <div className="ocean-bill-freight-and-charges">
            <div className="label">FREIGHT AND CHARGES</div>
            <InputField
              value={props.document.charge1}
              onChange={props.setCharge1}
            />
            <InputField
              value={props.document.charge2}
              onChange={props.setCharge2}
            />
            <InputField
              value={props.document.charge3}
              onChange={props.setCharge3}
            />
            <InputField
              value={props.document.charge4}
              onChange={props.setCharge4}
            />
            <InputField
              value={props.document.charge5}
              onChange={props.setCharge5}
            />
          </div>
          <div className="ocean-bill-revenue-tons">
            <div className="label">REVENUE TONS</div>
            <InputField
              value={props.document.revenueTons1}
              onChange={props.setRevenueTons1}
            />
            <InputField
              value={props.document.revenueTons2}
              onChange={props.setRevenueTons2}
            />
            <InputField
              value={props.document.revenueTons3}
              onChange={props.setRevenueTons3}
            />
            <InputField
              value={props.document.revenueTons4}
              onChange={props.setRevenueTons4}
            />
            <InputField
              value={props.document.revenueTons5}
              onChange={props.setRevenueTons5}
            />
          </div>
          <div className="ocean-bill-rate">
            <div className="label">RATE</div>
            <InputField
              value={props.document.rate1}
              onChange={props.setRate1}
            />
            <InputField
              value={props.document.rate2}
              onChange={props.setRate2}
            />
            <InputField
              value={props.document.rate3}
              onChange={props.setRate3}
            />
            <InputField
              value={props.document.rate4}
              onChange={props.setRate4}
            />
            <InputField
              value={props.document.rate5}
              onChange={props.setRate5}
            />
          </div>
          <div className="ocean-bill-per">
            <div className="label">PER</div>
            <InputField value={props.document.per1} onChange={props.setPer1} />
            <InputField value={props.document.per2} onChange={props.setPer2} />
            <InputField value={props.document.per3} onChange={props.setPer3} />
            <InputField value={props.document.per4} onChange={props.setPer4} />
            <InputField value={props.document.per5} onChange={props.setPer5} />
          </div>
          <div className="ocean-bill-prepaid">
            <div className="label">PREPAID</div>
            <InputField
              value={props.document.prepaid1}
              onChange={props.setPrepaid1}
            />
            <InputField
              value={props.document.prepaid2}
              onChange={props.setPrepaid2}
            />
            <InputField
              value={props.document.prepaid3}
              onChange={props.setPrepaid3}
            />
            <InputField
              value={props.document.prepaid4}
              onChange={props.setPrepaid4}
            />
            <InputField
              value={props.document.prepaid5}
              onChange={props.setPrepaid5}
            />
          </div>
          <div className="ocean-bill-collect">
            <div className="label">COLLECT</div>
            <InputField
              value={props.document.collect1}
              onChange={props.setCollect1}
            />
            <InputField
              value={props.document.collect2}
              onChange={props.setCollect2}
            />
            <InputField
              value={props.document.collect3}
              onChange={props.setCollect3}
            />
            <InputField
              value={props.document.collect4}
              onChange={props.setCollect4}
            />
            <InputField
              value={props.document.collect5}
              onChange={props.setCollect5}
            />
          </div>
        </div>
        <div className="ocean-bill-payable-row">
          <div className="ocean-bill-exchange-rate">
            <div className="label">EXCHANGE RATE</div>
            <InputField
              value={props.document.exchangeRate}
              onChange={props.setExchangeRate}
            />
          </div>
          <div className="ocean-bill-prepaid-at">
            <div className="label">PREPAID AT</div>
            <InputField
              value={props.document.prepaidAt}
              onChange={props.setPrepaidAt}
            />
          </div>
          <div className="ocean-bill-payable-at">
            <div className="label">PAYABLE AT</div>
            <InputField
              value={props.document.payableAt}
              onChange={props.setPayableAt}
            />
          </div>
          <div className="ocean-bill-place-and-date-of-issue">
            <div className="label">PLACE AND DATE OF ISSUE</div>
            <InputField
              value={props.document.placeAndDateOfIssue}
              onChange={props.setPlaceAndDateOfIssue}
            />
          </div>
        </div>
        <div className="ocean-bill-total-prepaid-row">
          <div className="ocean-bill-total-prepaid-in-local-currency">
            <div className="label">TOTAL PREPAID IN LOCAL CURRENCY</div>
            <InputField
              value={props.document.totalPrepaidInLocalCurrency}
              onChange={props.setTotalPrepaidInLocalCurrency}
            />
          </div>
          <div className="ocean-bill-number-of-waybills">
            <div className="label">NUMBER OF WAYBILLS</div>
            <InputField
              value={props.document.numberOfWaybills}
              onChange={props.setNumberOfWaybills}
            />
          </div>
        </div>
        <div className="ocean-bill-shipped-on-board-the-vessel">
          <div className="label">SHIPPED ON BOARD THE VESSEL</div>
          <InputField
            value={props.document.shippedOnBoardTheVessel}
            onChange={props.setShippedOnBoardTheVessel}
          />
        </div>
        <div className="ocean-bill-date">
          <div className="label">DATE</div>
          <InputField value={props.document.date} onChange={props.setDate} />
        </div>
        <div className="ocean-bill-by">
          <div className="label">BY</div>
          <InputField value={props.document.by} onChange={props.setBy} />
        </div>
      </div>
      <OceanBillButton document={props.document} />
    </div>
  </div>
);

export default OceanBillEditorDisplay;
