import {} from 'meteor/pascoual:pdfkitx';

const PDFDocument = global.PDFDocument;
const blobStream = global.blobStream;

const OceanBillDocument = (shipment, cb) => {
  if (!shipment) {
    return;
  }

  // create a document and pipe to a blob
  const doc = new PDFDocument({
    size: [595.28, 841.89],
    margins: {
      top: 18,
      bottom: 18,
      left: 18,
      right: 18,
    },
  });
  const stream = doc.pipe(blobStream());

  const page = {
    width: 595.28,
    height: 841.89,
    contentWidth: 595.28 - 18 * 2,
    contentHeight: 841.89 - 18 * 2,
    columnWidth: (595.28 - 18 * 2) / 2 - 18 / 2,
    leftColumnStart: 18,
    rightColumnStart: 595.28 / 2 + 18 / 2,
    leftColumnEnd: 18 + (595.28 - 18 * 2) / 2 - 18 / 2,
    rightColumnEnd: 595.28 - 18,
    margin: 18,
  };

  doc
    .registerFont('label', 'Helvetica-Bold')
    .registerFont('value', 'Courier')
    .registerFont('title', 'Helvetica-Bold')
    .registerFont('static', 'Helvetica');

  // *** Parties ***
  function drawParty(x, y, label, value) {
    doc
      .moveTo(x, y)
      .lineTo(x + page.columnWidth, y)
      .stroke();

    doc
      .moveTo(x, y - 0.5)
      .lineTo(x, y + 6.5)
      .stroke();

    doc
      .moveTo(x + page.columnWidth, y - 0.5)
      .lineTo(x + page.columnWidth, y + 6.5)
      .stroke();

    doc
      .font('label')
      .fontSize(7)
      .text(label, x + 1, y + 1);

    doc
      .font('value')
      .fontSize(10)
      .text(value, x + 1, y + 9);
  }

  drawParty(page.margin, page.margin, 'SHIPPER', shipment.shipper);
  drawParty(page.margin, page.margin + 70, 'CONSIGNEE', shipment.consignee);
  drawParty(
    page.margin,
    page.margin + 140,
    'NOTIFY PARTY',
    shipment.notifyParty
  );

  function drawField(x, y, label, value) {
    doc
      .moveTo(x, y)
      .lineTo(x + page.columnWidth / 2, y)
      .stroke();

    doc
      .moveTo(x, y - 0.5)
      .lineTo(x, y + 6.5)
      .stroke();

    doc
      .moveTo(x + page.columnWidth / 2, y - 0.5)
      .lineTo(x + page.columnWidth / 2, y + 6.5)
      .stroke();

    doc
      .font('label')
      .fontSize(7)
      .text(label, x + 1, y + 1);

    doc
      .font('value')
      .fontSize(10)
      .text(value, x + 1, y + 9, { width: page.columnWidth / 2 });
  }

  drawField(
    page.margin,
    page.margin + 210,
    'PRE-CARRIAGE BY',
    shipment.preCarriageBy
  );
  drawField(
    page.margin + page.columnWidth / 2,
    page.margin + 210,
    'PLACE OF RECEIPT',
    shipment.placeOfReceipt
  );
  drawField(page.margin, page.margin + 240, 'VESSEL', shipment.vessel);
  drawField(
    page.margin + page.columnWidth / 2,
    page.margin + 240,
    'PORT OF LOADING',
    shipment.portOfLoading
  );
  drawField(
    page.margin,
    page.margin + 270,
    'PORT OF DISCHARGE',
    shipment.portOfDischarge
  );
  drawField(
    page.margin + page.columnWidth / 2,
    page.margin + 270,
    'PLACE OF DELIVERY',
    shipment.placeOfDelivery
  );

  drawField(
    page.rightColumnStart,
    page.margin,
    'CUSTOMER REFERENCE',
    shipment.customerReference || ''
  );
  drawField(
    page.rightColumnStart + page.columnWidth / 2,
    page.margin,
    'BILL OF LADING NUMBER',
    shipment.billOfLadingNumber || ''
  );

  doc
    .font('title')
    .fontSize(26)
    .text(shipment.carrier, page.rightColumnStart, page.margin + 27, {
      width: page.columnWidth,
      align: 'center',
    });

  doc
    .font('title')
    .fontSize(18)
    .text(shipment.billType, page.rightColumnStart, page.margin + 85, {
      width: page.columnWidth,
      align: 'center',
    });

  doc
    .font('static')
    .fontSize(8)
    .text(shipment.terms, page.rightColumnStart, page.margin + 110, {
      width: page.columnWidth,
      align: 'justify',
    });

  doc
    .moveTo(page.margin, page.margin + 300)
    .lineTo(page.rightColumnEnd, page.margin + 300)
    .stroke();

  doc
    .font('label')
    .fontSize(7)
    .text(
      'DESCRIPTION OF GOODS, MARKS AND NUMBERS, CONTAINER NUMBERS',
      page.margin + 1,
      page.margin + 301
    )
    .font('value')
    .fontSize(10);
  doc.text(shipment.description, page.margin + 1, page.margin + 310, {
    width: 300,
  });

  doc
    .fontSize(7)
    .font('label')
    .text('PACKAGES', page.margin + 305, page.margin + 301, {
      width: 70,
      align: 'right',
    })
    .text('GROSS WEIGHT', page.margin + 395, page.margin + 301, {
      width: 70,
      align: 'right',
    })
    .text('MEASUREMENT', page.margin + 485, page.margin + 301, {
      width: 70,
      align: 'right',
    });

  doc
    .fontSize(10)
    .font('value')
    .text(shipment.packages1, page.margin + 305, page.margin + 310, {
      width: 70,
      align: 'right',
    })
    .text(shipment.packages2, page.margin + 305, page.margin + 320, {
      width: 70,
      align: 'right',
    })
    .text(shipment.packages3, page.margin + 305, page.margin + 330, {
      width: 70,
      align: 'right',
    })
    .text(shipment.packages4, page.margin + 305, page.margin + 340, {
      width: 70,
      align: 'right',
    })
    .text(shipment.packages5, page.margin + 305, page.margin + 350, {
      width: 70,
      align: 'right',
    })
    .text(shipment.grossWeight1, page.margin + 395, page.margin + 310, {
      width: 70,
      align: 'right',
    })
    .text(shipment.grossWeight2, page.margin + 395, page.margin + 320, {
      width: 70,
      align: 'right',
    })
    .text(shipment.grossWeight3, page.margin + 395, page.margin + 330, {
      width: 70,
      align: 'right',
    })
    .text(shipment.grossWeight4, page.margin + 395, page.margin + 340, {
      width: 70,
      align: 'right',
    })
    .text(shipment.grossWeight5, page.margin + 395, page.margin + 350, {
      width: 70,
      align: 'right',
    })
    .text(shipment.measurement1, page.margin + 485, page.margin + 310, {
      width: 70,
      align: 'right',
    })
    .text(shipment.measurement2, page.margin + 485, page.margin + 320, {
      width: 70,
      align: 'right',
    })
    .text(shipment.measurement3, page.margin + 485, page.margin + 330, {
      width: 70,
      align: 'right',
    })
    .text(shipment.measurement4, page.margin + 485, page.margin + 340, {
      width: 70,
      align: 'right',
    })
    .text(shipment.measurement5, page.margin + 485, page.margin + 350, {
      width: 70,
      align: 'right',
    });

  doc
    .fontSize(7)
    .font('label')
    .text('DECLARED VALUE', page.margin + 1, page.margin + 490)
    .fontSize(6)
    .text(
      'IF SHIPPER ENTERS A VALUE, THE AD VALOREM RATE WILL BE CHARGED (SEE ' +
        'CLAUSE 24 OF CARRIERS STANDARD BILL OF LADING)',
      page.margin + 140,
      page.margin + 490
    )
    .fontSize(8)
    .text(
      'TOTAL NO. OF CONTAINERS\nOR PACKAGES (IN WORDS)',
      page.margin + 1,
      page.margin + 510
    )
    .font('value')
    .text(shipment.declaredValue, page.margin + 1, page.margin + 500, {
      width: 70,
      align: 'center',
    })
    .text(
      shipment.totalContainersPackages,
      page.margin + 140,
      page.margin + 510,
      { width: 410 }
    );

  doc
    .moveTo(page.margin, page.margin + 530)
    .lineTo(page.rightColumnEnd, page.margin + 530)
    .stroke()
    .fontSize(7)
    .font('label')
    .text('FREIGHT AND CHARGES', page.margin + 1, page.margin + 531)
    .text('REVENUE TONS', page.margin + 140, page.margin + 531, {
      width: 70,
      align: 'right',
    })
    .text('RATE', page.margin + 230, page.margin + 531, {
      width: 70,
      align: 'right',
    })
    .text('PER', page.margin + 290, page.margin + 531, {
      width: 70,
      align: 'right',
    })
    .text('PREPAID', page.margin + 360, page.margin + 531, {
      width: 70,
      align: 'right',
    })
    .text('COLLECT', page.margin + 460, page.margin + 531, {
      width: 70,
      align: 'right',
    })
    .moveTo(page.margin, page.margin + 630)
    .lineTo(page.rightColumnEnd, page.margin + 630)
    .stroke()
    .font('value')
    .fontSize(8)
    .text(shipment.charge1, page.margin + 1, page.margin + 541)
    .text(shipment.charge2, page.margin + 1, page.margin + 551)
    .text(shipment.charge3, page.margin + 1, page.margin + 561)
    .text(shipment.charge4, page.margin + 1, page.margin + 571)
    .text(shipment.charge5, page.margin + 1, page.margin + 581)
    .text(shipment.revenueTons1, page.margin + 140, page.margin + 541, {
      width: 70,
      align: 'right',
    })
    .text(shipment.revenueTons2, page.margin + 140, page.margin + 551, {
      width: 70,
      align: 'right',
    })
    .text(shipment.revenueTons3, page.margin + 140, page.margin + 561, {
      width: 70,
      align: 'right',
    })
    .text(shipment.revenueTons4, page.margin + 140, page.margin + 571, {
      width: 70,
      align: 'right',
    })
    .text(shipment.revenueTons5, page.margin + 140, page.margin + 581, {
      width: 70,
      align: 'right',
    })
    .text(shipment.rate1, page.margin + 230, page.margin + 541, {
      width: 70,
      align: 'right',
    })
    .text(shipment.rate2, page.margin + 230, page.margin + 551, {
      width: 70,
      align: 'right',
    })
    .text(shipment.rate3, page.margin + 230, page.margin + 561, {
      width: 70,
      align: 'right',
    })
    .text(shipment.rate4, page.margin + 230, page.margin + 571, {
      width: 70,
      align: 'right',
    })
    .text(shipment.rate5, page.margin + 230, page.margin + 581, {
      width: 70,
      align: 'right',
    })
    .text(shipment.per1, page.margin + 290, page.margin + 541, {
      width: 70,
      align: 'right',
    })
    .text(shipment.per2, page.margin + 290, page.margin + 551, {
      width: 70,
      align: 'right',
    })
    .text(shipment.per3, page.margin + 290, page.margin + 561, {
      width: 70,
      align: 'right',
    })
    .text(shipment.per4, page.margin + 290, page.margin + 571, {
      width: 70,
      align: 'right',
    })
    .text(shipment.per5, page.margin + 290, page.margin + 581, {
      width: 70,
      align: 'right',
    })
    .text(shipment.prepaid1, page.margin + 360, page.margin + 541, {
      width: 70,
      align: 'right',
    })
    .text(shipment.prepaid2, page.margin + 360, page.margin + 551, {
      width: 70,
      align: 'right',
    })
    .text(shipment.prepaid3, page.margin + 360, page.margin + 561, {
      width: 70,
      align: 'right',
    })
    .text(shipment.prepaid4, page.margin + 360, page.margin + 571, {
      width: 70,
      align: 'right',
    })
    .text(shipment.prepaid5, page.margin + 360, page.margin + 581, {
      width: 70,
      align: 'right',
    })
    .text(shipment.collect1, page.margin + 460, page.margin + 541, {
      width: 70,
      align: 'right',
    })
    .text(shipment.collect2, page.margin + 460, page.margin + 551, {
      width: 70,
      align: 'right',
    })
    .text(shipment.collect3, page.margin + 460, page.margin + 561, {
      width: 70,
      align: 'right',
    })
    .text(shipment.collect4, page.margin + 460, page.margin + 571, {
      width: 70,
      align: 'right',
    })
    .text(shipment.collect5, page.margin + 460, page.margin + 581, {
      width: 70,
      align: 'right',
    })
    .fontSize(7)
    .font('label')
    .text('EXCHANGE RATE', page.margin + 1, page.margin + 631)
    .text('PREPAID AT', page.margin + 80, page.margin + 631)
    .text('PAYABLE AT', page.margin + 220, page.margin + 631)
    .text('PLACE AND DATE OF ISSUE', page.margin + 360, page.margin + 631)
    .moveTo(page.margin + 80, page.margin + 660)
    .lineTo(page.rightColumnEnd, page.margin + 660)
    .stroke()
    .font('value')
    .fontSize(8)
    .text(shipment.exchangeRate, page.margin + 1, page.margin + 641)
    .text(shipment.prepaidAt, page.margin + 80, page.margin + 641)
    .text(shipment.payableAt, page.margin + 220, page.margin + 641)
    .text(shipment.placeAndDateOfIssue, page.margin + 360, page.margin + 641)
    .fontSize(7)
    .font('label')
    .text(
      'TOTAL PREPAID IN LOCAL CURRENCY',
      page.margin + 80,
      page.margin + 661
    )
    .text('NUMBER OF WAYBILLS', page.margin + 220, page.margin + 661)
    .moveTo(page.margin, page.margin + 690)
    .lineTo(page.margin + 360, page.margin + 690)
    .font('value')
    .fontSize(8)
    .text(
      shipment.totalPrepaidInLocalCurrency,
      page.margin + 80,
      page.margin + 671
    )
    .text(shipment.numberOfWaybills, page.margin + 220, page.margin + 671)
    .stroke()
    .fontSize(7)
    .font('label')
    .text('SHIPPED ON BOARD THE VESSEL', page.margin + 1, page.margin + 691)
    .text('DATE', page.margin + 1, page.margin + 721)
    .text('BY', page.margin + 1, page.margin + 751)
    .font('value')
    .fontSize(8)
    .text(shipment.shippedOnBoardTheVessel, page.margin + 1, page.margin + 701)
    .text(shipment.date, page.margin + 1, page.margin + 731)
    .text(shipment.by, page.margin + 1, page.margin + 761);

  doc.write(`BL-${shipment.billOfLadingNumber}.pdf`);
};

export default OceanBillDocument;
