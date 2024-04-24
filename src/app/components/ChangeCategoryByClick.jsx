"use client";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const ChangeCategoryByClick = () => {
  return (
    <div className="flex items-center gap-4">
      <GrCaretPrevious />
      <GrCaretNext />
    </div>
  );
};

export default ChangeCategoryByClick;
