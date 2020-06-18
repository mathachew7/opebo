import React, { useState, useEffect } from "react";
import { processPayment } from "../../apiCore";
import { isAuthenticated } from "../../../auth";
import Spinner from "../Spinner";

const ProcessPayment = ({ paymentData, address, userId, token }) => {
  const [values, setValues] = useState({
    amount: 0,
    error: false,
    name: "",
    email: "",
    success: false,
    loading: false,
  });

  const { amount, name, email, success, loading, error } = values;

  const init = (paymentData, address, userId, token) => {
    setValues({ ...values, loading: true });

    if (paymentData) {
      setValues({
        ...values,
        amount: paymentData,
        error: false,
        name: address.name,
        email: isAuthenticated().user.email,
        success: true,
        loading: false,
      });
    } else {
      setValues({ ...values, error: true });
    }
  };

  useEffect(() => {
    init(paymentData, address, userId, token);
  }, [paymentData, address, userId, token]);

  const showLoading = () => loading && <Spinner />;

  const showError = () => (
    <div
      className='flex alert alert-danger justify-center items-center bg-red-500 text-white py-1'
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className='flex alert alert-info justify-center items-center bg-green-500 text-white py-1'
      style={{ display: success ? "" : "none" }}
    >
      Thank You for contacting us Our members will reach you soon.
    </div>
  );

  const pay = (amount, name, email, address) => {
    setValues({ ...values, error: false, loading: true });
    const options = {
      key: "rzp_test_ubV0DtfINTupvm",
      amount: amount * 100,
      name: name,
      description: "Payment",
      handler(response) {
        const payment_id = response.razorpay_payment_id;
        processPayment(payment_id, amount)
          .then((resp) => resp.json())
          .catch(function (error) {
            console.log("Request failed", error);
          });
      },
      prefill: {
        name: name,
        email: email,
      },
      notes: {
        address: address,
      },
      theme: {
        color: "#9D50BB",
      },
    };
    const rzp1 = new window.Razorpay(options);

    rzp1.open();
  };

  return (
    <>
      {loading ? (
        showLoading()
      ) : (
        <>
          {pay(amount, name, email, address)}
          {showError()}
          {showSuccess()}
        </>
      )}
    </>
  );
};

export default ProcessPayment;
