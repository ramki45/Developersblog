import axios from "axios";
import { useContext, useRef,useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {

  const [formValue, setFormValue] = useState("")

  const fillInputs = () => {
      setFormValue({username : "Developer", password : "developer"})
  }


  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://afternoon-citadel-20298.herokuapp.com/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
        
          value={formValue.username}
         
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          value={formValue.password}
         
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>

      </form>
      
    <button className="btn btn-primary" onClick={() => fillInputs()}>Demo</button>

      {/*<button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
  */}    </div>
  );
}