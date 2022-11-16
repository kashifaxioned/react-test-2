import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pages from "./Pages/Pages";

export default function App() {
  const totalPages = Array.from(Array(100).keys());

  console.log(totalPages);

  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    setPageNo((prev) => {
      if (prev > 0) return prev - 1;
    });
  };

  const handleNext = () => {
    setPageNo((prev) => {
      if (prev <= 100) return prev + 1;
    });
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Pages num={1} />} />
          {/* <Route path={`/page${x + 1}`} element={<Pages num={x + 1} />} /> */}
          {totalPages.map((x) => (
            <Route path={`/page${x + 1}`} element={<Pages num={x + 1} />} />
          ))}
        </Routes>
        <div className="my-10 flex justify-center items-center space-x-10">
          {pageNo !== 1 && (
            <Link to={`/page${pageNo - 1}`}>
              <span
                onClick={handlePrev}
                className="px-6 py-3 border rounded-[50%] block bg-[#CFF5E7] cursor-pointer text-2xl hover:bg-transparent transition-all duration-50 ease-in indent-[-999999px] before:text-inherit before:content-['\f104'] before:font-['FontAwesome'] before:float-right before:indent-0"
              >
                left
              </span>
            </Link>
          )}
          <span className="p-5 text-2xl">{pageNo}</span>
          {pageNo !== 100 && (
            <Link to={`/page${pageNo + 1}`}>
              <span
                onClick={handleNext}
                className="px-6 py-3 border rounded-[50%] block bg-[#CFF5E7] cursor-pointer text-2xl hover:bg-transparent transition-all duration-50 ease-in indent-[-999999px] before:text-inherit before:content-['\f105'] before:font-['FontAwesome'] before:float-right before:indent-0"
              >
                right
              </span>
            </Link>
          )}
        </div>
      </Router>
    </div>
  );
}
