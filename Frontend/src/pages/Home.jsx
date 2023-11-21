import Header from "../components/Header";
import Switch from "../components/Switch";

const Home = () => {
  return (
    <div>
      <h1 className="head_text">
        <span className="orange_gradient">OpenAI GPT-4</span>
        <br className="max-md:hidden" /> Kullanarak herhangi bir şeyin özetini
        çıkar!
      </h1>
      <h2 className="desc">
        İngilizce, Almanca, ... fark etmeden gpt-4 ile desteklenen herhangi bir
        dil ile verdiğiniz girdiler sonucu Türkçe çıktı alın.
      </h2>
      <Switch />
    </div>
  );
};

export default Home;
