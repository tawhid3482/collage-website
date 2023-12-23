import capmus from "../../assets/campus.jpg";
const Campus = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <img src={capmus} className="w-full h-[520px] " alt="" />
        </div>
        <div className=" relative left-0 bottom-48">
        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fspi.bd%2Fvideos%2F10154512183546890%2F&show_text=false&width=560&t=0"  className="border:none md:h-[250px] md:w-[560px]   overflow:hidden" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Campus;
