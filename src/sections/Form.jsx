import React, {useState} from 'react';

const Form = () => {
  const [isLogin, setisLogin] = useState(false);
  const [isRegister, setisRegister] = useState(true);

  function handleLoginClick(){
      setisLogin(true);
      setisRegister(false);
  }

  function handleRegisterClick(){
    setisLogin(false);
    setisRegister(true);
}
 
  return (
    <section>
      <form className={isRegister ? "block" : "hidden"}>
      <div className="form-box register my-20 max-sm:mx-10 mx-[500px] border-2 border-[#818FB4] p-10 rounded-xl shadow-3xl">
            <h2 className='font-palanquin font-bold text-[#435585] text-4xl text-center'>Start Alertify Today</h2>
            <div className='relative h-1 w-20 bg-[#818FB4] mt-7 left-[40%] mb-20'></div>
                <div className="input-box">
                    <input type="text" name="organizationName" id="oName" required></input>
                    <label>Organization Name</label>
                </div>
                <div className="input-box">
                    <input type="password" id="password" required></input>
                    <label>Password</label>
                </div>
                <div className="input-box">
                    <input type="password" id="conpass" required></input>
                    <label>Confirm Password</label>
                </div>
                <button type="submit" className="btn">Register</button>
                <div className="login-register">
                    <p>Already have an account ?<button className='hover:underline' onClick={handleLoginClick}>Login</button></p>
                </div>
            </div>
            
      </form>
      <form className={isLogin ? "block" : "hidden"}>
      <div className="form-box register my-20 max-sm:mx-10 mx-[500px] border-2 border-[#818FB4] p-10 rounded-xl shadow-3xl">
            <h2 className='font-palanquin font-bold text-[#435585] text-4xl text-center'>Start Alertify Today</h2>
            <div className='relative h-1 w-20 bg-[#818FB4] mt-7 left-[40%] mb-20'></div>
                <div className="input-box">
                    <input type="text" name="organizationName" id="oName" required></input>
                    <label>Organization Name</label>
                </div>
                <div className="input-box">
                    <input type="password" id="password" required></input>
                    <label>Password</label>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="login-register">
                    <p>Don't have an account ?<button className='hover:underline' onClick={handleRegisterClick}>Register</button></p>
                </div>
            </div>
            
      </form>
    </section>
  )
}

export default Form;