import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email", email)
    console.log("password", password)


    setEmail("")
    setPassword("")
  }
  
  
    return (
    <div className="flex items-center h-[100vh] justify-center">
        <div className="border border-emerald-600 rounded-2xl p-32">
            <form onSubmit={(e) => {
                handleSubmit(e)
            }} className="flex flex-col  w-64 gap-2">
                <input
                value={email}
                onChange={(e) =>{
                    setEmail(e.target.value)
                }}
                className="bg-[#111] border rounded-full px-5 py-3 border-emerald-600" required type="email"  name="" id="" placeholder="Enter Your Email"/>
                <input
                value={password}
                onChange={(e)=> {
                    setPassword(e.target.value)
                }}
                className="bg-[#111] border rounded-full px-5 py-3 border-emerald-600" required type="password" name="" id="" placeholder="Enter Password" />
                <button className="mt-3 px-4 py-3 rounded-full bg-emerald-500 font-semibold">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login