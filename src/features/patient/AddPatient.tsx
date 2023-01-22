import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { addPatientAsync } from "./api";
import { Patient } from "./types";

function AddPatient() {
  const { register, handleSubmit } = useForm();

  const mutation = useMutation({ mutationFn: addPatientAsync });

  return (
    <div>
      <form onSubmit={handleSubmit((data) => mutation.mutate(data as Patient))}>
        <label>First Name:</label>
        <input type="text" {...register("first_name")} />
        <label>Middle Name:</label>
        <input type="text" {...register("middle_name")} />
        <label>Last Name:</label>
        <input type="text" {...register("last_name")} />
        <label>Phone:</label>
        <input type="text" {...register("phone")} />
        <label>Age:</label>
        <input type="text" {...register("age")} />
        <select {...register("gender")}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label>Blood Type:</label>
        <input type="text" {...register("blood_type")} />
        <label>Address:</label>
        <input type="text" {...register("address")} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddPatient;
