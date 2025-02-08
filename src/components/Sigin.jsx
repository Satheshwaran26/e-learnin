import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSY_VUsmer7_6A7P03X42eMcCKkL-10J4",
  authDomain: "e-learning-1e257.firebaseapp.com",
  projectId: "e-learning-1e257",
  storageBucket: "e-learning-1e257.firebasestorage.app",
  messagingSenderId: "1055726461035",
  appId: "1:1055726461035:web:7836a78ec231af3b68512e",
  measurementId: "G-6ND3GRBHZ4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Signed in with Google successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('../assets/lg.jpg')" }}>
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-3xl p-8 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <img src="../assets/ENF.png" alt="Sign In" className="w-20 h-20 rounded-full" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Sign in</h2>
        <p className="text-center text-gray-600 mb-6">Access your account and explore more.</p>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSignIn}>
          <div className="mb-4 relative">
            <input 
              type="email" 
              placeholder="Email" 
              className="pl-4 pr-4 py-2 w-full border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <input 
              type={passwordVisible ? "text" : "password"} 
              placeholder="Password" 
              className="pl-4 pr-12 py-2 w-full border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span 
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              <i className={`fas ${passwordVisible ? "fa-eye-slash" : "fa-eye"} text-gray-400`}></i>
            </span>
          </div>
          <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Sign In
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <button 
            onClick={handleGoogleSignIn} 
            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition duration-300"
          >
            <i className="fa-brands fa-google"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;