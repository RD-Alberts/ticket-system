import { useForm } from "react-hook-form";

type LoginFormInputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Ingelogd met:", data);
    // hier kan je bijvoorbeeld navigeren naar /dashboard
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Login to Ticket System
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            type="email"
            className={`mt-1 w-full border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            className={`mt-1 w-full border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 ${
              errors.password ? "border-red-500 ring-red-500" : "border-gray-300 focus:ring-blue-500"
            }`}
            placeholder="••••••••"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};
