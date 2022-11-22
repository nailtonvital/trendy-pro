import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';

export default function AllNewsPage() {
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
      <div className="grid grid-cols-4 gap-3 mx-auto mt-7">
        {posts.map((post) => {
          return (
            <div className="flex-col rounded-xl shadow-2xl w-72 p-5">
              <Link
                to="rss-feed/news"
                state={{
                  img: post.thumbnail,
                  title: post.title,
                  author: post.author,
                  content: post.description,
                }}
              >
                <img src={post.thumbnail} className="rounded" alt="" />
                <p className="font-bold mt-2">{post.title}</p>
                <p className="text-[#CBCBCB] font-thin">{post.author}</p>
                <p className="truncate">
                  {post.description.replace(/<\/?[^>]+(>|$)/g, "")}
                </p>
              </Link>
            </div>
          );
        })}

        
      </div>
    </div>
  );
}
