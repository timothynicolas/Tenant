import avatar from "../../src/assets/svg/male-avatar.svg"
import home from "../../src/assets/svg/home.svg"
import vector1 from "../../src/assets/svg/vector1.svg"
import ellipse from "../../src/assets/svg/ellipse.svg"

export default function Login(){
    return(
        <div className="h-screen flex overflow-hidden">
            <div className=" w-1/2 relative h-screen">
                <img src={ellipse} className=" absolute top-32 left-24 w-9/12 z-0"/>
                <img src={vector1} className="absolute left-0  z-10 "/>
                <img src={home} className=" absolute top-52 left-24 w-3/5 z-20"/>
                
            </div>

            <div className=" w-1/2 h-screen flex  ">
                <div className="flex flex-col items-center w-4/5 mt-16">
                    <img src={avatar} className="h-32"></img>
                    <p className="text-5xl font-bold my-14 cursor-default">Tenant</p>
                    <input className="bg-theme-gray p-4 rounded-full w-8/12 font-semibold" type="text" placeholder="Username"></input>
                    <br/>
                    <input className="bg-theme-gray p-4 rounded-full w-8/12 font-semibold" type="password" placeholder="Password"></input>
                    <span className="self-end mr-28 cursor-pointer text-theme-grey my-6 text-sm"><a href="#">Forgot Password?</a></span>
                    <div className="flex">
                        <button className="bg-black p-4 text-white rounded-full font-bold w-48 mr-4">Log In</button>
                        <button className="bg-theme-green p-4 text-white rounded-full font-bold w-48 ml-4">Register</button>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}