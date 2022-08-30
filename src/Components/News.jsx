import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import NewsCard from "./NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const uppercase=(word)=>{
    let capital = word.slice(0,1).toUpperCase();
    return capital+word.slice(1)
  }

  const getNews = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // let results = parsedData.articles;

    setResults(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      props.category
    }&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pagesize}`;

    setPage(page + 1);

    let data = await fetch(url);
    let parsedData = await data.json();
    setResults(results.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);

    setLoading(false);
  };

  return (
    <>

    <h1 className="text-black text-center text-[3rem] font-semibold drop-shadow-2xl  ">News<span className="text-[#3892b0] ">ify - </span> {`${uppercase(props.category)}`}</h1>

      {loading && <Loading />}

        <InfiniteScroll
          dataLength={results.length} 
          next={fetchData}
          hasMore={results.length !== totalResults}
          loader={<Loading />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="w-full flex justify-center">
          <div className="cards m-6 flex flex-wrap justify-center ">
            {results.map((article) => {
              return (
                <div key={article.url}>
                  <NewsCard
                    title={article?.title}
                    link={article.url}
                    description={article?.description}
                    image_url={article?.urlToImage}
                    date= {article?.publishedAt}
                  />
                </div>
              );
            })}
          </div>
      </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
