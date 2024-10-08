import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { Logo, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  const handleGPTSearch = () => {
    navigate("/gptsearch");
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

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
            uid,
            email,
            photoURL,
            displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute top-0 w-full flex justify-between items-center px-4 sm:px-8 py-2 sm:py-4 bg-gradient-to-b from-black to-transparent z-10">
      {/* Netflix Logo */}
      <img
        className="w-28 sm:w-36 cursor-pointer"
        src={Logo}
        alt="Netflix logo"
        onClick={() => navigate("/")}
      />

      {/* User Icon or Sign In */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {user ? (
          <>
            <div className="flex p-1 sm:p-2">
              {showGptSearch && (
                <select
                  onChange={handleLanguageChange}
                  className="p-1 sm:p-2 m-1 sm:m-2 bg-grey-900 bg-black rounded-lg text-white"
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <img
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover cursor-pointer"
              src={user.photoURL || "default-profile.png"}
              alt="User Icon"
              onClick={() => navigate("/profile")}
            />
            <button
              onClick={handleGPTSearch}
              className="ml-2 sm:ml-4 text-xs sm:text-sm font-semibold text-white bg-purple-700 px-2 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-purple-800"
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>
            <button
              onClick={handleSignOut}
              className="ml-2 sm:ml-4 text-xs sm:text-sm font-semibold text-white bg-red-600 px-2 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-red-700"
            >
              Sign Out
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
