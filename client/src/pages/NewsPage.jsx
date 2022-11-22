import { useState, useEffect } from 'react'
import Axios from 'axios'

export default function NewsPage() {
     const[posts, setPosts] = useState([])

    const rssFeeds = ['https://feeds.macrumors.com/MacRumors-All', 'https://www.vox.com/rss/recode/index.xml', 'http://feeds.arstechnica.com/arstechnica/technology-lab', 'https://www.wired.com/feed/rss']

    useEffect(() => {
      rssFeeds.map((url) => {
        Axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${url}`).then(
          (data) => {
            setPosts((prev) => [...prev, ...data.data.items]);
          }
        );
      });

    }, []);

  return (
    <div className="text-white mt-5">
      <h3 className="font-bold text-4xl">RSS Feed</h3>
      <p className="font-bold text-xl text-[#CBCBCB]">Latest News</p>
      {/* Hashtag */}
      <div className="grid grid-cols-3 gap-3 mx-auto mt-7">
        {posts.map((post) => {
          return (
            <div className="flex-col rounded-xl shadow-2xl w-72 p-5">
              <img
                src="https://images.macrumors.com/article-new/2022/11/Flighty-Live-Activities.jpeg"
                className="rounded"
                alt=""
              />
              <p className="font-bold">
                Five Useful iPhone Apps With Live Activities for World Cup
                Scores and More
              </p>
              <p className="text-[#CBCBCB] font-thin">Joe Rossignol</p>
              <p>
                iOS 16.1 was released in September with support for Live
                Activities in third-party apps. This...
              </p>
            </div>
          );
        })}

        <div className="flex-col rounded-xl shadow-2xl w-72 p-5">
          <img
            src="https://images.macrumors.com/article-new/2022/11/Flighty-Live-Activities.jpeg"
            className="rounded"
            alt=""
          />
          <p className="font-bold">
            Five Useful iPhone Apps With Live Activities for World Cup Scores
            and More
          </p>
          <p className="text-[#CBCBCB] font-thin">Joe Rossignol</p>
          <p>
            iOS 16.1 was released in September with support for Live Activities
            in third-party apps. This...
          </p>
        </div>
      </div>
    </div>
  );
}
