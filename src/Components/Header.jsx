import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { Logo } from "../utils/constant";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            photoURL: photoURL,
            displayName: displayName,
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute top-0 w-full flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black to-transparent z-10">
      {/* Netflix Logo */}
      <img
        className="w-36 cursor-pointer"
        src={Logo}
        alt="Netflix logo"
        onClick={() => navigate("/")}
      />

      {/* User Icon or Sign In */}
      <div className="flex items-center">
        {user ? (
          <>
            <img
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
              src={user.photoURL || "default-profile.png"}
              alt="User Icon"
              onClick={() => navigate("/profile")}
            />
            <button
              onClick={handleSignOut}
              className="ml-4 font-semibold text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700"
            >
              Sign Out
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
