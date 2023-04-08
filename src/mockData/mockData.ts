export const orderId = 34562;

export const paymentInfo: Payment.CreditCardInfo = {
  name: 'Levi Ackerman',
  number: '2564 1421 0897 1244',
  expirationDate: '02/2022',
  cvv: '123',
};

export const paymentMethods: Payment.PaymentMethod[] = [
  {
    name: 'Credit Card',
    icon: 'card',
  },
  {
    name: 'Paypal',
    icon: 'paypal',
  },
  {
    name: 'Cash',
    icon: 'wallet',
  },
];

export const dropdownItems: App.Option[] = [
  {
    text: 'Dine In',
    value: '0',
  },
  {
    text: 'To Go',
    value: '1',
  },
  {
    text: 'Delivery',
    value: '2',
  },
];
