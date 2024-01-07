import { FaBook } from "react-icons/fa";

const Participate = () => {
    return (
        <div className="my-10">
            <div className="flex-col lg:flex-row lg:flex justify-between items-center gap-16">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold my-5">KU Team Has A Long Story</h2>
                    <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500  font-medium" >
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                    </p>
                    <p className="text-lg my-3">Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. </p>
                </div>
                <div className="lg:w-1/2">
                <hr className="border-2 border-purple-500 w-full my-5" />
                <h2 className="text-3xl  font-bold">How To Participate?</h2>
                <p className="text-lg my-3">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. </p>
                <div className="my-5 ">
                <button className="btn bg-gradient-to-r from-purple-600 to-pink-600 text-lg text-white">Athletics guide book <FaBook className="text-xl"></FaBook></button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Participate;