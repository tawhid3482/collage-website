
const Subtitle = ({sub, title}) => {
    return (
        <div>
             <p className="text-lg text-slate-500 mb-7">
          {sub} {">"} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">{title}</span>
        </p>
        </div>
    );
};

export default Subtitle;