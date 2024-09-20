const dns = require('dns');
const BIP353 = require('bip353');
class BIP353 {
  constructor() {
    this.dns = d
    ns;
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
