import React, { FC } from "react";
import Card2 from "@/components/Card2/Card2";
import { articleDataType } from "@/data/types";
import Card6 from "@/components/Card6/Card6";
import HeaderFilter from "./HeaderFilter";
import { Article } from "@/controllers/article";

export interface SectionMagazine1Props {
  articles: Article[],
  heading?: string;
  className?: string;
}

const SectionMagazine1: FC<SectionMagazine1Props> = ({
  articles,
  heading = "New Indie Times 🎈 ",
  className = "",
}) => {
  return (
    <div className={`nc-SectionMagazine1 ${className}`}>
      <HeaderFilter heading={heading} />
      {!articles.length && <span>Nothing we found!</span>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {articles[0] && <Card2 size="large" article={articles[0]} />}
        {/* <div className="grid gap-6 md:gap-8"> */}
        {/*   {articles */}
        {/*     .filter((_, i) => i < 4 && i > 0) */}
        {/*     .map((item, index) => ( */}
        {/*     // あとで直す */}
        {/*       // <Card6 key={index} article={item} /> */}
        {/*     ))} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SectionMagazine1;
