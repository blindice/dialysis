import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";

import { Account } from "./types";
import { loginAsync } from "./api";
import { Admin } from "../../types/Admin";
import { userAtom } from "./atoms";
import { toggleAtom } from "../../atoms";

export const Login = () => {
  const [, setUser] = useAtom(userAtom);
  const [, setToggle] = useAtom(toggleAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Account>();

  const mutation = useMutation<Admin, Error, Account, unknown>({
    mutationFn: ({ username, password }: Account) =>
      loginAsync({ username, password }),
    onSuccess: (data: Admin) => {
      const { phone, ...rest } = data;
      setUser(JSON.stringify(rest));
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "15%",
        border: "1px black solid",
        padding: "0px 20px 20px 20px",
        margin: "18% auto 0px",
      }}
    >
      <h1>Login</h1>
      <input
        placeholder="Username"
        {...register("username", { required: true })}
      ></input>
      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      ></input>
      <button onClick={handleSubmit((data) => mutation.mutate(data))}>
        Login
      </button>
      {/* <button
        onClick={() => {
          setToggle((prevState) => !prevState);
        }}
      >
        Create Admin
      </button> */}
      {mutation.isError && (
        <h5>
          {mutation.error.message.includes("(or no)")
            ? "User Not Found"
            : "Something went wrong!"}
        </h5>
      )}
    </div>
  );
};
