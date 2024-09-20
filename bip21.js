const generateBIP21URI = (address, amount, label) => {
    const uri = new URL(`bitcoin:${address}`);
    if (amount) uri.searchParams.set('amount', amount);
    if (label) uri.searchParams.set('label', label);
    return uri.toString();
  };
  
  const uri = generateBIP21URI('bitcoin_adress', '0.001', 'Payment for services');
  