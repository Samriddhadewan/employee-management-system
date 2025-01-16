
const Login = () => {
  return (
    <div className="flex items-center h-[100vh] justify-center">
        <div className="border border-emerald-600 rounded-2xl p-32">
            <form className="flex flex-col  w-60 gap-2">
                <input className="bg-[#111] border rounded-full px-4 py-3 border-emerald-600" type="email"  name="" id="" placeholder="Enter Your Email"/>
                <input className="bg-[#111] border rounded-full px-4 py-3 border-emerald-600" type="password" name="" id="" placeholder="Enter Password" />
                <button className="mt-3 px-4 py-3 rounded-full bg-emerald-500 font-semibold">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login