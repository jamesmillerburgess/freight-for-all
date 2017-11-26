import React from 'react';
import './OceanBillEditor.scss';
import OceanBillDocument from '../../documents/OceanBillDocument';

export const OceanBillButton = props => (
  <button
    className="button-submit"
    onClick={() =>
      OceanBillDocument(props.document, url => {
        const open = window.open(url);
        if (open === null || typeof open === 'undefined') {
          // TODO: Create themed alert
          window.alert(`This URL has been blocked by your browser:\n${url}`);
        }
      })
    }
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
                <textarea
                  value={props.document.shipper}
                  onChange={e => props.setShipper(e.target.value)}
                />
              </div>
              <div className="ocean-bill-party">
                <div className="label">CONSIGNEE</div>
                <textarea
                  value={props.document.consignee}
                  onChange={e => props.setConsignee(e.target.value)}
                />
              </div>
              <div className="ocean-bill-party">
                <div className="label">NOTIFY PARTY</div>
                <textarea
                  value={props.document.notifyParty}
                  onChange={e => props.setNotifyParty(e.target.value)}
                />
              </div>
            </div>
            <div className="ocean-bill-routing">
              <div className="ocean-bill-routing-row">
                <div className="ocean-bill-routing-field">
                  <div className="label">PRE-CARRIAGE BY</div>
                  <input
                    value={props.document.preCarriageBy}
                    onChange={e => props.setPreCarriageBy(e.target.value)}
                  />
                </div>
                <div className="ocean-bill-routing-field">
                  <div className="label">PLACE OF RECEIPT</div>
                  <input
                    value={props.document.placeOfReceipt}
                    onChange={e => props.setPlaceOfReceipt(e.target.value)}
                  />
                </div>
              </div>
              <div className="ocean-bill-routing-row">
                <div className="ocean-bill-routing-field">
                  <div className="label">VESSEL</div>
                  <input
                    value={props.document.vessel}
                    onChange={e => props.setVessel(e.target.value)}
                  />
                </div>
                <div className="ocean-bill-routing-field">
                  <div className="label">PORT OF LOADING</div>
                  <input
                    value={props.document.portOfLoading}
                    onChange={e => props.setPortOfLoading(e.target.value)}
                  />
                </div>
              </div>
              <div className="ocean-bill-routing-row">
                <div className="ocean-bill-routing-field">
                  <div className="label">PORT OF DISCHARGE</div>
                  <input
                    value={props.document.portOfDischarge}
                    onChange={e => props.setPortOfDischarge(e.target.value)}
                  />
                </div>
                <div className="ocean-bill-routing-field">
                  <div className="label">PLACE OF DELIVERY</div>
                  <input
                    value={props.document.placeOfDelivery}
                    onChange={e => props.setPlaceOfDelivery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ocean-bill-right-column">
            <div className="ocean-bill-routing-row">
              <div className="ocean-bill-routing-field">
                <div className="label">CUSTOMER REFERENCE</div>
                <input
                  value={props.document.customerReference}
                  onChange={e => props.setCustomerReference(e.target.value)}
                />
              </div>
              <div className="ocean-bill-routing-field">
                <div className="label">BILL OF LADING NUMBER</div>
                <input
                  value={props.document.billOfLadingNumber}
                  onChange={e => props.setBillOfLadingNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="ocean-bill-carrier">
              <textarea
                value={props.document.carrier}
                onChange={e => props.setCarrier(e.target.value)}
              />
            </div>
            <div className="ocean-bill-type">
              <input
                value={props.document.billType}
                onChange={e => props.setBillType(e.target.value)}
              />
            </div>
            <div className="ocean-bill-terms">
              <textarea
                value={props.document.terms}
                onChange={e => props.setTerms(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="ocean-bill-cargo">
          <div className="ocean-bill-description">
            <div className="label">
              DESCRIPTION OF GOODS, MARKS AND NUMBERS, CONTAINER NUMBERS
            </div>
            <textarea
              value={props.document.description}
              onChange={e => props.setDescription(e.target.value)}
            />
          </div>
          <div className="ocean-bill-packages">
            <div className="label">PACKAGES</div>
            <input
              value={props.document.packages1}
              onChange={e => props.setPackages1(e.target.value)}
            />
            <input
              value={props.document.packages2}
              onChange={e => props.setPackages2(e.target.value)}
            />
            <input
              value={props.document.packages3}
              onChange={e => props.setPackages3(e.target.value)}
            />
            <input
              value={props.document.packages4}
              onChange={e => props.setPackages4(e.target.value)}
            />
            <input
              value={props.document.packages5}
              onChange={e => props.setPackages5(e.target.value)}
            />
          </div>
          <div className="ocean-bill-gross-weight">
            <div className="label">GROSS WEIGHT</div>
            <input
              value={props.document.grossWeight1}
              onChange={e => props.setGrossWeight1(e.target.value)}
            />
            <input
              value={props.document.grossWeight2}
              onChange={e => props.setGrossWeight2(e.target.value)}
            />
            <input
              value={props.document.grossWeight3}
              onChange={e => props.setGrossWeight3(e.target.value)}
            />
            <input
              value={props.document.grossWeight4}
              onChange={e => props.setGrossWeight4(e.target.value)}
            />
            <input
              value={props.document.grossWeight5}
              onChange={e => props.setGrossWeight5(e.target.value)}
            />
          </div>
          <div className="ocean-bill-measurement">
            <div className="label">MEASUREMENT</div>
            <input
              value={props.document.measurement1}
              onChange={e => props.setMeasurement1(e.target.value)}
            />
            <input
              value={props.document.measurement2}
              onChange={e => props.setMeasurement2(e.target.value)}
            />
            <input
              value={props.document.measurement3}
              onChange={e => props.setMeasurement3(e.target.value)}
            />
            <input
              value={props.document.measurement4}
              onChange={e => props.setMeasurement4(e.target.value)}
            />
            <input
              value={props.document.measurement5}
              onChange={e => props.setMeasurement5(e.target.value)}
            />
          </div>
        </div>
        <div className="ocean-bill-declared-value">
          <input
            value={props.document.declaredValue}
            onChange={e => props.setDeclaredValue(e.target.value)}
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
          <input
            value={props.document.totalContainersPackages}
            onChange={e => props.setTotalContainersPackages(e.target.value)}
          />
        </div>
        <div className="ocean-bill-charges">
          <div className="ocean-bill-freight-and-charges">
            <div className="label">FREIGHT AND CHARGES</div>
            <input
              value={props.document.charge1}
              onChange={e => props.setCharge1(e.target.value)}
            />
            <input
              value={props.document.charge2}
              onChange={e => props.setCharge2(e.target.value)}
            />
            <input
              value={props.document.charge3}
              onChange={e => props.setCharge3(e.target.value)}
            />
            <input
              value={props.document.charge4}
              onChange={e => props.setCharge4(e.target.value)}
            />
            <input
              value={props.document.charge5}
              onChange={e => props.setCharge5(e.target.value)}
            />
          </div>
          <div className="ocean-bill-revenue-tons">
            <div className="label">REVENUE TONS</div>
            <input
              value={props.document.revenueTons1}
              onChange={e => props.setRevenueTons1(e.target.value)}
            />
            <input
              value={props.document.revenueTons2}
              onChange={e => props.setRevenueTons2(e.target.value)}
            />
            <input
              value={props.document.revenueTons3}
              onChange={e => props.setRevenueTons3(e.target.value)}
            />
            <input
              value={props.document.revenueTons4}
              onChange={e => props.setRevenueTons4(e.target.value)}
            />
            <input
              value={props.document.revenueTons5}
              onChange={e => props.setRevenueTons5(e.target.value)}
            />
          </div>
          <div className="ocean-bill-rate">
            <div className="label">RATE</div>
            <input
              value={props.document.rate1}
              onChange={e => props.setRate1(e.target.value)}
            />
            <input
              value={props.document.rate2}
              onChange={e => props.setRate2(e.target.value)}
            />
            <input
              value={props.document.rate3}
              onChange={e => props.setRate3(e.target.value)}
            />
            <input
              value={props.document.rate4}
              onChange={e => props.setRate4(e.target.value)}
            />
            <input
              value={props.document.rate5}
              onChange={e => props.setRate5(e.target.value)}
            />
          </div>
          <div className="ocean-bill-per">
            <div className="label">PER</div>
            <input
              value={props.document.per1}
              onChange={e => props.setPer1(e.target.value)}
            />
            <input
              value={props.document.per2}
              onChange={e => props.setPer2(e.target.value)}
            />
            <input
              value={props.document.per3}
              onChange={e => props.setPer3(e.target.value)}
            />
            <input
              value={props.document.per4}
              onChange={e => props.setPer4(e.target.value)}
            />
            <input
              value={props.document.per5}
              onChange={e => props.setPer5(e.target.value)}
            />
          </div>
          <div className="ocean-bill-prepaid">
            <div className="label">PREPAID</div>
            <input
              value={props.document.prepaid1}
              onChange={e => props.setPrepaid1(e.target.value)}
            />
            <input
              value={props.document.prepaid2}
              onChange={e => props.setPrepaid2(e.target.value)}
            />
            <input
              value={props.document.prepaid3}
              onChange={e => props.setPrepaid3(e.target.value)}
            />
            <input
              value={props.document.prepaid4}
              onChange={e => props.setPrepaid4(e.target.value)}
            />
            <input
              value={props.document.prepaid5}
              onChange={e => props.setPrepaid5(e.target.value)}
            />
          </div>
          <div className="ocean-bill-collect">
            <div className="label">COLLECT</div>
            <input
              value={props.document.collect1}
              onChange={e => props.setCollect1(e.target.value)}
            />
            <input
              value={props.document.collect2}
              onChange={e => props.setCollect2(e.target.value)}
            />
            <input
              value={props.document.collect3}
              onChange={e => props.setCollect3(e.target.value)}
            />
            <input
              value={props.document.collect4}
              onChange={e => props.setCollect4(e.target.value)}
            />
            <input
              value={props.document.collect5}
              onChange={e => props.setCollect5(e.target.value)}
            />
          </div>
        </div>
        <div className="ocean-bill-payable-row">
          <div className="ocean-bill-exchange-rate">
            <div className="label">EXCHANGE RATE</div>
            <input
              value={props.document.exchangeRate}
              onChange={e => props.setExchangeRate(e.target.value)}
            />
          </div>
          <div className="ocean-bill-prepaid-at">
            <div className="label">PREPAID AT</div>
            <input
              value={props.document.prepaidAt}
              onChange={e => props.setPrepaidAt(e.target.value)}
            />
          </div>
          <div className="ocean-bill-payable-at">
            <div className="label">PAYABLE AT</div>
            <input
              value={props.document.payableAt}
              onChange={e => props.setPayableAt(e.target.value)}
            />
          </div>
          <div className="ocean-bill-place-and-date-of-issue">
            <div className="label">PLACE AND DATE OF ISSUE</div>
            <input
              value={props.document.placeAndDateOfIssue}
              onChange={e => props.setPlaceAndDateOfIssue(e.target.value)}
            />
          </div>
        </div>
        <div className="ocean-bill-total-prepaid-row">
          <div className="ocean-bill-total-prepaid-in-local-currency">
            <div className="label">TOTAL PREPAID IN LOCAL CURRENCY</div>
            <input
              value={props.document.totalPrepaidInLocalCurrency}
              onChange={e =>
                props.setTotalPrepaidInLocalCurrency(e.target.value)
              }
            />
          </div>
          <div className="ocean-bill-number-of-waybills">
            <div className="label">NUMBER OF WAYBILLS</div>
            <input
              value={props.document.numberOfWaybills}
              onChange={e => props.setNumberOfWaybills(e.target.value)}
            />
          </div>
        </div>
        <div className="ocean-bill-shipped-on-board-the-vessel">
          <div className="label">SHIPPED ON BOARD THE VESSEL</div>
          <input
            value={props.document.shippedOnBoardTheVessel}
            onChange={e => props.setShippedOnBoardTheVessel(e.target.value)}
          />
        </div>
        <div className="ocean-bill-date">
          <div className="label">DATE</div>
          <input
            value={props.document.date}
            onChange={e => props.setDate(e.target.value)}
          />
        </div>
        <div className="ocean-bill-by">
          <div className="label">BY</div>
          <input
            value={props.document.by}
            onChange={e => props.setBy(e.target.value)}
          />
        </div>
      </div>
      <OceanBillButton document={props.document} />
    </div>
  </div>
);

export default OceanBillEditorDisplay;
