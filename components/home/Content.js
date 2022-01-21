import { useState, useCallback } from "react";

import Image from "next/image";
import Section from "../Section";

export default function Content() {
  const [showVid, setshowVid] = useState({ isShow: false, vidId: "" });

  const videoId = [
    "1HyoWT-qvyA",
    "wI2qjqWcZ4Y",
    "UykE3fuULJg",
    "5XoOVDHPngM",
    "bAtdQsF8hIQ",
  ];

  return (
    <Section>
      <div className="flex flex-col items-center mb-10">
        <h2 className="g-h2 g-text-c2 mb-5">VIDEOS</h2>
        <div className="w-full grid grid-cols-2 gap-4 p-4 lg:grid-cols-4 bg-gray-900">
          {videoId.map((v, i) => (
            <Video index={i} key={i} id={v} setshowVid={setshowVid} />
          ))}
        </div>
        <a
          href="https://www.youtube.com/channel/UCl4-RGEW0A9BV9bTR8sjfLA"
          className="btn-orange g-text-c4 mt-6 md:opacity-100"
          target="_blank"
          rel="noreferrer"
        >
          WATCH US ON YOUTUBE
        </a>
      </div>
      {showVid.isShow ? (
        <ShowVid showVid={showVid} setshowVid={setshowVid} />
      ) : (
        ""
      )}
    </Section>
  );
}

function Play({ className }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 149 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0.190918 0.760986L148.695 84L0.190918 167.239V0.760986Z" />
    </svg>
  );
}

function ShowVid({ showVid, setshowVid }) {
  const turnOff = useCallback(() => {
    setshowVid({ isShow: false, vidId: "" });
  }, [setshowVid]);

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-gray-900/95 g-px flex justify-center items-center"
      onClick={turnOff}
    >
      <div className="youtube-video-container bg-black g-max-w">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube-nocookie.com/embed/${showVid.vidId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

function Video({ id, setshowVid, index }) {
  const showVid = useCallback(() => {
    setshowVid({ isShow: true, vidId: id.toString() });
  }, [setshowVid]);

  return (
    <button
      // className="col-span-1 "
      className={`relative group bg-black ${
        index == 0 ? "col-span-2 lg:row-span-2" : "col-span-1"
      }`}
      onClick={showVid}
    >
      <Image
        src={`https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`}
        // layout="fill"
        width={1280}
        height={720}
        // objectFit="cover"
        // priority
        alt={id}
      />
      <div className="hover:scale-110 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 opacity-50 bg-gray-900 ring-2 ring-gray-200 group-hover:opacity-100 transition-all overflow-hidden">
        <div className="relative w-full h-full flex justify-center items-center before:absolute before:-left-2 before:-right-2 before:bottom-0 before:top-0 before:bg-orange-500 before:-skew-x-12 before:-translate-x-16 group-hover:before:translate-x-0 before:transition-transform">
          <Play className="fill-gray-200 ml-1 z-10" />
        </div>
      </div>
    </button>
  );
}
