import React from "react";

const ReportOfTheftForm = () => {
  return (
    <form>
      <input type="number" placeholder="Enter license number"/>
      <input type="text" placeholder="Enter your full name"/>
      <select  name="" id="">
        <option value="" disabled>Select type bicycle</option>
        <option value="sport">sport</option>
      </select>
      <input type="text" placeholder="Enter bike color " />
      <input type="date" placeholder=""/>
      <textarea placeholder="More information"></textarea>
    </form>
  )
}

export default ReportOfTheftForm;