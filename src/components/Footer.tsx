import React from "react";

export default function Footer() {
  return (
    <div className="h-12 flex justify-center shadow-lg my-5 items-center bg-neutral-800 rounded-xl">
      <span>
        Developed by{" "}
        <a
          className="text-purple-600 hover:text-purple-700"
          href="https://github.com/SergeiKazanin"
          target="_blank"
          rel="noreferrer"
        >
          Sergei Kazanin
        </a>
      </span>
    </div>
  );
}
