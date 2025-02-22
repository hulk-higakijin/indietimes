import SectionSubscribe2 from "@/components/SectionSubscribe2/SectionSubscribe2";
import React, { FC, ReactNode } from "react";

const LayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`nc-LayoutPage relative`}>
      <div className="container relative pt-6 sm:pt-10">
        {/* CONTENT */}
        <div className="p-5 mx-auto bg-white rounded-xl sm:rounded-3xl lg:rounded-[40px] shadow-lg sm:p-10 lg:p-16 dark:bg-neutral-900">
          {children}
        </div>
      </div>

      <div className="container pb-16">
        {/* <SectionSubscribe2 /> */}
      </div>
    </div>
  );
};

export default LayoutPage;
