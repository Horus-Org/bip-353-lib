const dns = require('dns');
class dns {
  constructor() {
    this.dns = dns;
  }
}
const resolveDNSPayment = (domain) => {
  return new Promise((resolve, reject) => {
    dns.resolveTxt(domain, (err, addresses) => {
      if (err) reject(err);
      else {
        const paymentInfo = addresses.flat().find(item => item.startsWith('payment:'));
        resolve(paymentInfo ? paymentInfo.split(':')[1] : null);
      }
    });
  });
};

resolveDNSPayment('example.com').then(paymentInfo => {
  console.log('Payment Info:', paymentInfo);
}).catch(error => {
  console.error('DNS resolution error:', error);
});

class BOLT12 {
  constructor(paymentInfo) {
    this.paymentInfo = paymentInfo;
  }

  getPaymentInfo() {
    return {
      error: String,
      suggestedAmounts: [],
      minSendable: String,
      maxSendable: String,
      minFee: String,
      maxFee: String,
      feeGranularity: String,
      timelockDelta: String,
      description: String,
      descriptionHash: String,
      fallbackAddress: String,
      paymentHash: String,
      paymentSecret: String,
      features: [],
      tags: [],
      minFinalCltvExpiry: String,
      maxHtlcValueInFlightMsat: String,
      maxAcceptedHtlcs: String,
      channelReserve: String,
      htlcMinimumMsat: String,
      toSelfDelay: String,
      lastUpdate: String,
      state: String,
      channelFlags: String,
      localBalance: String,
      remoteBalance: String,
      unsettledBalance: String,
      totalSatoshisSent: String,
      totalSatoshisReceived: String,
      numUpdates: String,
      pendingHtlcs: String,
      csvDelay: String,
      maxCltvExpiry: String,
      htlcs: [],
    };
  }
}