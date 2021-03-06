import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const Update = () => {
  const [order, setOrder] = useState({});
  const [isUpdate, setIsUpdated] = useState(null);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const url = `https://infinite-eyrie-26334.herokuapp.com/orders/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id, isUpdate]);

  const onSubmit = (data) => {
    fetch(`https://infinite-eyrie-26334.herokuapp.com/update/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          alert("Modified successfully");
          setIsUpdated(true);
          reset();
        } else {
          setIsUpdated(false);
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control text-center mb-3"
          defaultValue={order?.status}
          {...register("status")}
          required
        />

        <input
          className="btn btn-success justify-content-center w-25"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default Update;
