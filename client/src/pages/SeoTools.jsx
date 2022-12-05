import React from "react";
import Card from "../components/Card";
import gen from "../assets/gen.png";
import topics from "../assets/topics.png";
import interests from "../assets/interests.png";
import pagespeed from "../assets/pagespeed.png";
import backlink from "../assets/backlink.png";
import overtime from "../assets/overtime.png";
import keyGen from "../assets/keyGen.png";
import { Link } from "react-router-dom";

export default function SeoTools() {
  document.title = "TrendyPro | SEO Tools";

  const seoFeatures = [
    {
      img: gen,
      name: "Related Queries",
      description: "Related Queries of a keyword",
      link: "related-queries",
    },
    {
      img: topics,
      name: "Related Topics",
      description: "Related Topics of a keyword",
      link: "related-topics",
    },
    {
      img: interests,
      name: "Meta Ads Interests",
      description: "Reveal all hidden Meta ads Interests",
      link: "facebook-interests",
    },
    {
      img: overtime,
      name: "Interest Overtime",
      description: "Generate keywords for your content",
      link: "interest-overtime",
    },
    // {
    //   img: pagespeed,
    //   name: "PageSpeed Insights",
    //   description: "Check the speed of a website",
    //   link: "pagespeed-insights",
    // },
    {
      img: backlink,
      name: "Backlink Checker",
      description: "Fetch all backlinks of a website",
      link: "backlink-checker",
    },
    {
      img: keyGen,
      name: "Keyword Generator",
      description: "Get content ideas based on queries",
      link: "keyword-generator",
    },
  ];

  return (
    <div className="text-white mt-5 bg-[#262631] h-screen">
      <h3
        className="font-bold text-4xl"
        data-bs-toggle="tooltip"

      >
        SEO Tools
      </h3>

      <div className="flex-wrap lg:flex gap-5 mt-7 ">
        {seoFeatures.map((item, key) => {
          return (
            <Link to={item.link}>
              <Card
                key={key}
                img={item.img}
                name={item.name}
                description={item.description}
              />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
