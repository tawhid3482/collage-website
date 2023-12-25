import AdmissionBanner from "./AdmissionBanner";

const Admission = () => {
    return (
        <div>
            <AdmissionBanner></AdmissionBanner>
            <div className="my-4 p-8">
                <p className="text-xl text-slate-400"> Home {'>'} <span className="text-green-600">Apply To Kingster</span></p>
            </div>
            <div className="mt-10 p-8">
                <h2 className="text-3xl font-bold mb-4">Detail About How To Apply</h2>
                <div className="flex justify-between  ">
                    <div className="w-[550px] text-lg">
                    If you would like to study in the university in the heart of the city that focus on chaning the world for better to morrow, you’re choosin the right place. We do not use special formulas to select students. We look at every single applicant’s application, academic and personal, to select students who suit to our community with a full range of backgrounds. If you would like to study in the university in the heart of the city.
                    </div>
                    <div className="w-[550px] text-lg">
                    If you would like to study in the university in the heart of the city that focus on chaning the world for better to morrow, you’re choosin the right place. We do not use special formulas to select students. We look at every single applicant’s application, academic and personal, to select students who suit to our community.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admission;