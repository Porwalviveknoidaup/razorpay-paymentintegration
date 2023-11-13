import React, { useEffect } from 'react';

const Payment = ({ KeyId,closePayment,amount }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;

    script.onload = () => {
      const options = {
        key: KeyId,
        amount: amount*100, // Amount in paise (100 paise = 1 INR)
        currency: 'INR',
        name: 'Mr Developer Payment',
        description: 'Payment for Product/Service',
        image: 'https://your_logo_url.com/logo.png',
        handler: (response) => {
          closePayment()
            window.location.reload()
        },
        modal: {
          ondismiss: function () {
            window.location.reload()
          },
        },
        prefill: {
          name: 'John Doe',
          email: 'john@example.com',
          contact: '+919876543210',
        },
        theme: {
          color: '#F37254',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <button>Pay Now</button>;
};

export default Payment;
