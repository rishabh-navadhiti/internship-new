import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import styles from "./Form.module.css";

// form fields type
interface FormData {
  name: string;
  email: string;
  age?: number;
  gender: string;
  subscribe?: boolean;
}

//expected response type from server
interface UserResponse {
  message: string;
}

const Form = () => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const mutation = useMutation<UserResponse, Error, FormData>({
    mutationFn: (newData) =>
      axios
        .post("http://localhost:3001/users", newData)
        .then((res) => res.data),
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutation.mutate(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={styles.form}
      >
        <h2 className={styles.heading}>Support Form</h2>

        <div>
          <input
            className={styles.input}
            placeholder="Name"
            {...register("name", { required: "Your name is required" })}
          />
          {errors.name && <div>{errors.name.message}</div>}
        </div>

        <div>
          <input
            className={styles.input}
            placeholder="Email"
            type="email"
            {...register("email", {
              required: "Your email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && <div>{errors.email.message}</div>}
        </div>

        <div>
          <input
            className={styles.input}
            placeholder="Age"
            type="number"
            {...register("age", {
              valueAsNumber: true,
              validate: (value) =>
                value > 1 && value <= 100 || "Age must be between 1 to 100",
            })}
          />
          {errors.age && <div>{errors.age.message}</div>}
        </div>

        <div>
          <select
            className={styles.select}
            {...register("gender", { required: "Your gender is required" })}
          >
            <option value="">--Select Gender--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
          {errors.gender && <div>{errors.gender.message}</div>}
        </div>

        <div className={styles.newsletter}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="subscribe"
            {...register("subscribe")}
          />
          <label htmlFor="subscribe">Subscribe to our daily newsletter</label>
        </div>

        <div>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </div>
      </form>

      {mutation.isPending && <p>Submitting form...</p>}
      {mutation.isSuccess && <p>User details submitted!!</p>}
      {mutation.isError && <p>Error sending the details, please try again</p>}
    </>
  );
};

export default Form;
