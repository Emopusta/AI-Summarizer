import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logo } from "../assets";

function Header() {
  const { aisum_userInfo } = useSelector((state) => state.auth);
  console.log(aisum_userInfo);
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-row w-full mb-10 pt-3">
        <div className="flex flex-row items-center">
          <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
          <Link to="/">
            <p className="font-satoshi text-3xl ml-1">EmopSummarizer</p>
          </Link>
        </div>
        <div>
        <Link to="/">
            <button className="btn btn-ghost normal-case text-xl ml-5">
              Home
            </button>
          </Link>
          <Link to="/about">
            <button className="btn btn-ghost normal-case text-xl ml-5">
              About
            </button>
          </Link>

        {aisum_userInfo ? (
          <Link to="/profile">
             <button className="btn btn-ghost normal-case text-xl ml-5">
             {aisum_userInfo.name}
            </button>
        </Link>
        ): (<Link to="/sign-in">
        <button className="btn btn-ghost normal-case text-xl ml-5">
          Sign In
        </button>
      </Link>)}


          <button
            type="button"
            onClick={() =>
              window.open("https://github.com/Emopusta/AI-Summarizer")
            }
            className="ml-5 black_btn"
          >
            Github
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
