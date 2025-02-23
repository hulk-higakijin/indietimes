import React, { FC } from "react";
import Avatar from "@/components/Avatar/Avatar";
import { PostDataType } from "@/data/types";
import Link from "next/link";

export interface PostCardMetaProps {
  className?: string;
  hiddenAvatar?: boolean;
  avatarSize?: string;
}

const PostCardMeta: FC<PostCardMetaProps> = ({
  className = "leading-none text-xs",
  hiddenAvatar = false,
  avatarSize = "h-7 w-7 text-sm",
}) => {

  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${className}`}
    >
      <Link
        href={`/`}
        className="relative flex items-center space-x-2 rtl:space-x-reverse"
      >
        {!hiddenAvatar && (
          <Avatar
            radius="rounded-full"
            sizeClass={avatarSize}
            imgUrl={'https://pbs.twimg.com/profile_images/1817166485867106304/v-335And_400x400.jpg'}
            userName={'higakijin'}
          />
        )}
        <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
          higakijin
        </span>
      </Link>
      <>
        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
          ·
        </span>
        <span className="text-neutral-500 dark:text-neutral-400 font-normal">
          2024/12/12
        </span>
      </>
    </div>
  );
};

export default PostCardMeta;
