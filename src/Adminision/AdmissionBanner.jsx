const AdmissionBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://www.globalcareercounsellor.com/blog/wp-content/uploads/2021/03/ow-to-Effectively-Guide-Students-on-College-Admissions.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full relative right-16 top-24 md:right-40 md:top-28 lg:right-96 lg:top-48 text-left">
            <h1 className="mb-5 text-xl md:text-3xl font-bold text-green-500">
              Admission
            </h1>
            <p className="my-5 text-4xl md:text-6xl font-bold">Apply To SPI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionBanner;
