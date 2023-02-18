import Link from "next/link";
import Container from "../../../shared/composers/container";
import MyImage from "../../../shared/composers/myimage";

const RealisationLoop = ({ current }) => {
  const realisations = [
    { img: "/assets/logoV2/MayaReal.svg" },
    { img: "/assets/logoV2/ImmersyReal.svg" },
    { img: "/assets/logoV2/barbiereReal.svg" },
    { img: "/assets/logoV2/MayaReal.svg" },
    { img: "/assets/logoV2/ImmersyReal.svg" },
    { img: "/assets/logoV2/barbiereReal.svg" },
    { img: "/assets/logoV2/MayaReal.svg" },
    { img: "/assets/logoV2/ImmersyReal.svg" },
    { img: "/assets/logoV2/barbiereReal.svg" },
    { img: "/assets/logoV2/MayaReal.svg" },
    { img: "/assets/logoV2/ImmersyReal.svg" },
    { img: "/assets/logoV2/barbiereReal.svg" },
    { img: "/assets/logoV2/MayaReal.svg" },
    { img: "/assets/logoV2/ImmersyReal.svg" },
    { img: "/assets/logoV2/barbiereReal.svg" },
    { img: "/assets/logoV2/MayaReal.svg" },
    { img: "/assets/logoV2/ImmersyReal.svg" },
    { img: "/assets/logoV2/barbiereReal.svg" },
  ];
  return (
    <section className='slide-option h-[400px]'>
      <style jsx>
        {`
          section {
            display: flex;
            flex-flow: column;
            align-items: center;
          }
          section div.container {
            transition: all 0.3s ease;
          }
          section div.container h1 {
            margin: 15px 0 0 0;
          }
          section div.container h3 {
            margin: 0 0 25px 0;
          }
          @media (max-width: 992px) {
            section {
            }
          }
          section.slide-option {
            margin: 0 0 50px 0;
          }
          section.slide-option .no-marg {
            margin: 0 0 0 0;
          }
          div.highway-slider {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 350px;
          }
          div.highway-slider div.highway-barrier {
            overflow: hidden;
            position: relative;
          }
          div.highway-slider ul.highway-lane {
            display: flex;
            height: 100%;
          }
          div.highway-slider ul.highway-lane li.highway-car {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            ${current == "Services" ? "" : "  background:#283445"};
            color: #343434;
          }
          @keyframes translatestf {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-500%);
            }
          }
          #stffull div.highway-barrier ul.highway-lane {
            width: 500%;
          }
          #stffull div.highway-barrier ul.highway-lane li.highway-car {
            animation: translatestf 30s linear infinite;
          }
          #stffull div.highway-barrier ul.highway-lane li.highway-car h4 {
            font-size: 28px;
          }
          @keyframes translateinfinite {
            100% {
              transform: translateX(calc(-2160px));
            }
          }
          #infinite div.highway-barrier {
          }
          #infinite div.highway-barrier::before,
          #infinite div.highway-barrier::after {
            content: " ";
            position: absolute;
            z-index: 9;
            width: 0px;
            height: 100%;
          }
          #infinite div.highway-barrier::before {
            top: 0;
            left: 0;
            background: linear-gradient(
              to right,
              #ffffff 0%,
              rgba(255, 255, 255, 0) 100%
            );
          }
          #infinite div.highway-barrier::after {
            top: 0;
            right: 0;
            background: linear-gradient(
              to left,
              #ffffff 0%,
              rgba(255, 255, 255, 0) 100%
            );
          }
          #infinite div.highway-barrier ul.highway-lane {
            width: calc(4320px);
          }
          #infinite div.highway-barrier ul.highway-lane li.highway-car {
            width: 180px;
            animation: translateinfinite 25s linear infinite;
          }
          #infinite
            div.highway-barrier
            ul.highway-lane
            li.highway-car
            span.fab {
            font-size: 65px;
          }
          #red {
            background: #cb5454;
          }
          #orange {
            background: #cb8054;
          }
          #yellow {
            background: #cbba54;
          }
          #green {
            background: #69b46e;
          }
          #blue {
            background: #6091b0;
          }
        `}
      </style>

      <div id='infinite' className='highway-slider mt-10 absolute '>
        <div className='container highway-barrier md:max-w-[2000px]'>
          <ul className='highway-lane '>
            {realisations.map((real, i) => {
              return (
                <Link href={"/realisations"} key={i}>
                  <li
                    className={`highway-car  relative max-w-[180px] ${
                      i % 2 == 0 ? "" : ""
                    }`}
                    key={i}
                  >
                    <MyImage
                      source={real.img}
                      // layout={"fill"}
                      h={350}
                      w={180}
                      objectFit={"contain"}
                      className='rounded-[18px]'
                    />
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default RealisationLoop;
