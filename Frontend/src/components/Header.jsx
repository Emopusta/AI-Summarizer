import { logo } from "../assets";
function Header() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-row w-full mb-10 pt-3">
        <div className="flex flex-row items-center">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <p className="font-satoshi text-3xl">EmopSummarizer</p>
        </div>
        <button
          type="button"
          onClick={() => window.open("https://github.com/Emopusta/AI-Summarizer")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        <span className="orange_gradient">OpenAI GPT-4</span>
        <br className="max-md:hidden" />{" "}
       
        Kullanarak herhangi bir şeyin özetini çıkar!
      </h1>
      <h2 className="desc">
        İngilizce, Almanca, ... fark etmeden gpt-4 ile desteklenen herhangi bir dil ile verdiğiniz girdiler sonucu Türkçe çıktı alın.</h2>
    </header>
  );
}

export default Header;
