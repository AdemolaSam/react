import React from "react";
import { Select, Option } from "@material-tailwind/react";
 
export default function ControlledSelect({options}) {
  const [value, setValue] = React.useState("react");
 
  return (
    <div className="w-max relative">
      <Select
        label="Select Version"

value={value}
        onChange={(val) => setValue(val)}
      >
        { 
            options.map((option,idx) => {
              return  <Option key={idx} value={option.value}>{option.item}</Option>
            })
        }
      </Select>
    </div>
  );
}