import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";
import MyImage from "../myimage";
import { SliceSimulator } from "@prismicio/slice-simulator-react";

const ProgressBar = ({ timing, url }) => {
  const [percentage, setPercentage] = useState(0);
  const text = "dguyd";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const percent = Math.floor(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      );
      setPercentage(percent);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className=' shadow-apple rounded-[10px] p-5'>
      <p className='text-center font-semibold mb-2'>Temps de lecture</p>
      <div className='mx-auto bg-slate-50 rounded-full w-[120px] h-[120px] border-1 '>
        <div className='absolute transform left-[37%] top-[39%]'>
          {timing} min
        </div>
        <CircularProgressbar
          value={percentage}
          strokeWidth={5}
          classes=' '
          styles={{
            root: {
              width: "100%",
            },
            path: {
              stroke: "#FFB873",
            },
          }}
        />
      </div>
      <p className='text-center mt-2'>Partager</p>
      <div className=' text-center space-x-4 mt-2'>
        <Link
          href={`https://www.facebook.com/sharer.php?u=https://listri.digital/blogs/${url}`}
        >
          <a target='_blank'>
            <MyImage source='/assets/logo/Facebook.svg' w={30} h={30} />
          </a>
        </Link>

        <Link
          href={`http://www.linkedin.com/shareArticle?mini=true&url=https://listri.digital/blogs/${url}`}
          target='_blank'
        >
          <a>
            <MyImage source='/assets/logo/Linkedin.svg' w={30} h={30} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProgressBar;
