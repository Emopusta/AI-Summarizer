import { useState, useEffect } from "react";
import { loader } from "../assets";
import { useSummarizeMutation } from "../services/slices/articleApiSlice";

const SummarizeTextContent = () => {
  const [article, setArticle] = useState({ text: "", summary: "", title: "" });
  const [getTextSummary, { error, isFetching }] = useSummarizeMutation();
  const [allArticles, setAllArticles] = useState([]);

  
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("text_articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getTextSummary(article.text);
    if (data?.summary ) {
      const newArticle = { ...article, summary: data.summary};
      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
    
      localStorage.setItem("text_articles", JSON.stringify(updatedAllArticles));
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(()=> setCopied(false), 3000);
  }

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Yazı Giriniz"
            value={article.text}
            onChange={(e) => setArticle({ ...article, text: e.target.value })}
            required
            className="url_input peer"
          />
          <input
            type="text"
            placeholder="Başlık Giriniz"
            value={article.title}
            onChange={(e) => setArticle({ ...article, title: e.target.value })}
            required
            className="url_input peer"
          />
          
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            Gönder
          </button>
        </form>
        {/* Browser URL History */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto  mb-5">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              
              <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Display Results */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Something is wrong... <br />{" "}
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : 
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Article <span className="blue-gradient">Summary</span>
              </h2>
              <div className="summary_box">
                    <p className="font-inter font-medium text-sm text-gray-700">{article.summary}</p>
              </div>
            </div>
          )
        }
      </div>
    </section>
  );
}

export default SummarizeTextContent