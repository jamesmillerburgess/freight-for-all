describe('Ocean Bill', () => {
  let b;
  beforeEach(() => {
    b = browser;
    b.url('http://localhost:3000');
  });
  it('should print a bill of lading', function() {
    // based on http://1.bp.blogspot.com/-Z6DEoOndv64/VhGzZ9mbpyI/AAAAAAAAC4k/lStWDGR5IJk/s1600/Seaway-bill-of-lading.jpg
    const document = {
      shipper: `KLARA HOBZA C/O SIBONY
63 FLUSHING AVE, UNIT 200STE 323A
BROOKLYN NY 11205`,
      consignee: `KLARA HOBZA C/O TILL KRAUSE
LORNSENPIATZ 4
22767 HAMBURG
TEL: 40-3861-9754 FAX: 4037503069
Contact: KLARA HOBZA C/O TILL KRAUS`,
      placeOfReceipt: 'NEW YORK',
      portOfLoading: 'NEW YORK',
      portOfDischarge: 'DUBLIN',
      placeOfDelivery: 'HAMBURG',
      customerReference: 'LOT #:OE-10054',
      billOfLadingNumber: 'NYCHAM10054',
      carrier: 'PIONEER SHIPPING LOGISTICS INC.',
      billType: 'SEAWAY BILL',
      terms: `IN WITNESS WHEROF, THE UNDERSIGNED SIGNING OF BEHALF OF PIONEERSHPPING INC. HAS SIGNED THREE(3) BILLS OF LADING, ALL OF THE SAME TENOR AND DATE, ONE OF WHICH BEING ACCOMPLISHED.
THE OTHERS TO STAND VOID.
      
ATTENTION OF SHIPPER. THE TERMS AND CONDITIONS OF THE ORDER BILL OF LADING UNDER WHICH THIS SHIPMENT IS ACCEPTED ARE PRINTED ON THE BACK HEREOF.
NOTE:UNLESS OTHERWISE SPECIFIED THE CHARGE LISTED ABOVE DO NOT INCLUDE CUSTOMS CLEARANCE AND SIMILARLY NON TRANSPORTATION CHARGE WHICH ARE FOR THE ACCOUNT OF THE CARGO.`,
      description: `PERSONAL EFFECTS
AES ITN:X20090914033918
CONTAINER NO.
NYKU5724883
CFS/CFS`,
      packages1: '7CTN',
      grossWeight1: '109.43 KGS',
      measurement: '1.30 CBM',
      totalContainersPackages: 'SEVEN CARTONS ONLY',
      numberOfWaybills: '3',
      date: '09/26/09',
    };
  });
});
