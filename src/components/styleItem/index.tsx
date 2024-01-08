import React from 'react';

const StyleImageItem = () => {
  return (
    <article className="relative w-[80px]">
      <img
        src="https://picsum.photos/80/80"
        className="rounded-lg object-contain"
        alt=""
      />
      <span className="absolute top-[78%] text-center w-full left-0 h-4 text-sm rounded-b-lg text-white bg-[#4f4d4d]">
        hoạt hình...
      </span>
    </article>
  );
};
export default StyleImageItem;
