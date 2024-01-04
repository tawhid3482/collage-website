const Experience = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGHSs7_CiFwdZ2xPkamKonB81hPS1Jo926RxVcqfVnGtrbcFaI3du9XL68R22AY9BM1g&usqp=CAU)",
        }}
      >
        <div className="hero-overlay  bg-opacity-60"></div>
        <div className=" text-white p-8">
          <div className="flex-col md:flex-row lg:flex justify-between items-start gap-6">
            <div className="text-3xl font-bold w-full"><p>The Campus Experience</p></div>
            <div className="lg:text-xl md:font-semibold">
              Kingster University was established by John Smith in 1920 for the
              public benefit and it is recognized globally. Throughout our great
              history, Kingster has offered access to a wide range of academic
              opportunities. As a world leader in higher education, the
              University has pioneered change in the sector.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
