import Baner from "../Components/Shayed/Baner";
import Subtitle from "../Components/Shayed/Subtitle";
import athletics from "../assets/sports.jpg";
const Athletics = () => {
  return (
    <div className="p-7">
      <div className="">
        <Baner
          img={athletics}
          title1={"Go For KU Team!"}
          title2={"Athletics"}
        ></Baner>
      </div>
      <div className="">
        <Subtitle sub={"Home"} title={"Athletics"}></Subtitle>
        <hr className="border-2 border-green-500 w-80" />
      </div>
      <div className="">
        <p className="text-lg text-green-500 mt-5" >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, <br /> there live the blind texts. Separated they
          live in
        </p>
        <p className="text-lg mt-2">
        Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so.
        </p>
      </div>
    </div>
  );
};

export default Athletics;
