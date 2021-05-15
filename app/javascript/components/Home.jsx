import React, { useState } from "react";
import Input from './Input';

const Home = () => {
  return (
    <div>
      <Input inputType={"text"} />
      <Input inputType={"number"} />
      <Input inputType={"checkbox"} />
    </div>
  )
}

export default Home;
