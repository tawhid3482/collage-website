import capmus from "../../assets/campus.jpg";
const Campus = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <img src={capmus} className="w-full h-[550px] " alt="" />
        </div>
        <div className="">
          <video
            muted
            loop
            autoPlay
            type="video/mp4"
            src="https://www.facebook.com/watch/?v=10154512183546890&ref=sharing"
            className="border-2 border-red-600 relative  left-0 bottom-40"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Campus;
