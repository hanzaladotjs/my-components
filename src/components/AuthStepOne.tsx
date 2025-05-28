export default function AuthStepOne() {
  return (
    <div className="flex flex-col space-y-4 font-mono ">
      <h1 className="text-3xl text-[#283747] font-bold mb-10">
        {" "}
        Yo! What's up?{" "}
      </h1>
      <input
        type="text"
        placeholder="Email address"
        className="p-3 border rounded "
      />
      <button className="p-3 border border-[#DCDCDC] text-white rounded-lg bg-[#5d6d7e] hover:bg-[#283747]">
        {" "}
        Continue{" "}
      </button>
      <p className="text-md  px-10">
        {" "}
        Don't have an account?{" "}
        <span className=" font-semibold hover:underline">Sign up. </span>{" "}
      </p>
      <p className="text-sm font-semibold mt-2 px-33"> OR</p>
      <div className="flex flex-col space-y-2 text-md font-medium ">
        <button className=" flex items-center py-3 w-full text-start pl-4 border-3 hover:bg-[#d6dbdf] border-[#DCDCDC] rounded-lg  ">
          <svg
            width="22px"
            height="22px"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z"
              stroke="#000000"
              stroke-width="1.5"
            ></path>
            <path
              d="M20 3L4 21"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </svg>{" "}
          &nbsp; Continue with X
        </button>

        <button className="flex items-center py-3 w-full text-start pl-4 border-3 hover:bg-[#d6dbdf] pl- border-[#DCDCDC] rounded-lg  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="22px"
            height="22px"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fbc02d"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#e53935"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4caf50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1565c0"
              d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>{" "}
          &nbsp;
          Continue with Google{" "}
        </button>
        <button className="flex items-center py-3 w-full text-start pl-4 border-3 hover:bg-[#d6dbdf] border-[#DCDCDC] rounded-lg  ">
          {" "}
       <svg width="22px" height="22px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        &nbsp;  Continue with Github{" "}
        </button>
      </div>
    </div>
  );
}
