import React from "react";

const input = React.forwardRef((props, ref) => {
  return (
    <div className="mt-4">
      <p className="font-sans font-medium text-main-black">{props.label}</p>
      <div className="flex justify-between w-full input-style relative">
        <input
          ref={ref}
          className={`mt-1 p-2 outline-none text-main-gray ${
            props.children ? "w-11/12" : "w-full"
          } `}
          type={props.type}
          placeholder={props.placeholder}
        />
        {props.children}
      </div>
      <style jsx>
        {`
          .input-style {
            background: #ffffff;
            border: 1px solid #eeeeee;
            box-sizing: border-box;
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  );
});

export default input;
