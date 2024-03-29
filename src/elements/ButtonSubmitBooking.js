import React from "react";
import Button from "elements/Button";
import { useDispatch } from "react-redux";
import { checkoutBooking } from "store/actions/checkout";
import { useNavigate } from "react-router-dom";

export default function ButtonSubmitBooking(data, itemDetails) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function fnStartBooking() {
    const { data } = this.state;
    dispatch(
      checkoutBooking({
        _id: itemDetails._id,
        duration: data.duration,
        date: {
          startDate: data.date.startDate,
          endDate: data.date.endDate,
        },
      })
    );
    navigate("/checkout");
  }

  return (
    <Button
      className="btn"
      hasShadow
      isPrimary
      isBlock
      onClick={fnStartBooking}
    >
      Continue to Book
    </Button>
  );
}
