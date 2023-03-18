declare namespace Payment {
  type PaymentMethod = {
    name: string;
    icon: string;
  };

  type CreditCardInfo = {
    name: string;
    number: string;
    expirationDate: string;
    cvv: string;
  };
}
