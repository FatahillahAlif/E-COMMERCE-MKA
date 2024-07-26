import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function FormComp() {
  return (
    <form className="flex max-w-md  p-10 border border-black flex-col gap-4 rounded-xl w-96">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="NIK" />
        </div>
        <TextInput id="email2" type="email" placeholder="NIK" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Password" />
        </div>
        <TextInput id="password2" type="password" required shadow />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox className='border-black rounded-none bg-transparent' id="agree" />
        <Label htmlFor="agree" className="flex">
          Ingat Saya
        </Label>
      </div>
      <Button type="submit">LOGIN</Button>
    </form>
  );
}


export default FormComp