import { Parallax } from "react-parallax";
// import banner from "../../../assets/menu/banner3.jpg";

const Cover = ({ img, title, message }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 16 }}
        bgImage={`${img}`}
        bgImageAlt="the dog"
        strength={-100}
      >
        <div className="hero  min-h-[80vh]">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-xl px-3 md:px-32 py-10  bg-black bg-opacity-60 uppercase">
              <h1 className="mb-5 text-4xl md:text-6xl font-bold">{title}</h1>
              <p className="mb-5">{message}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
