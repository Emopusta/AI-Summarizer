import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useSummarizeMutation } from "../services/slices/articleApiSlice";

function SummarizeLinkContent() {
  const [article, setArticle] = useState({ url: "", summary: "", title: "" });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");

const [getSum, { error, isLoading }] = useSummarizeMutation();
  
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const articleUrl = article.url
    const  data  = await getSum({articleUrl}).unwrap();
    if (data?.summary ) {
      const newArticle = { ...article, summary: data.summary};
      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
    
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
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
          <img
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="URL Giriniz"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
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
              <div className="copy/btn" onClick={() => handleCopy(item.url)}>
                <img
                  src={copied === item.url ? tick : copy}
                  alt="copy_icon"

                  className="w-[100%] object-contain"
                />
              </div>
              <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Display Results */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isLoading ? (
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

export default SummarizeLinkContent;
