export const LoginModal = () => {
  return (
    <>
      <input type="checkbox" id="login-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="mb-4">
            <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
            <p className="text-gray-500">Please sign in to your account.</p>
            <label
              htmlFor="login-modal"
              className="btn btn-sm btn-circle absolute right-2 top-6"
            >
              X
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="mail@gmail.com"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs mt-5">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter your password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-800"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#">Forgot your password?</a>
            </div>
          </div>

          <div className="modal-action justify-center">
            <label htmlFor="login-modal" className="btn btn-wide">
              Sign-in
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
