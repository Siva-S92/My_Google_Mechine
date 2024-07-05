import SearchHeader from "@/components/SearchHeader";
import React, { Suspense } from "react";

function WebImglayout({ children }) {
  return (
    <>
      <Suspense>
        <div>
          <SearchHeader />
          {children}
        </div>
      </Suspense>
    </>
  );
}

export default WebImglayout;
