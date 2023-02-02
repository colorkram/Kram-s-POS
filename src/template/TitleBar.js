import React from "react";

export default function TitleBar(props) {
  return (
    <div className="flex justify-center pt-[110px] text-[38px] mb-6">
      {props.kram}
    </div>
  );
}
