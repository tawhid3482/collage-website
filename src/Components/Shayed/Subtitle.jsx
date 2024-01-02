
const Subtitle = ({sub, title}) => {
    return (
        <div>
             <p className="text-lg text-slate-500 mb-7">
          {sub} {">"} <span className="text-green-600">{title}</span>
        </p>
        </div>
    );
};

export default Subtitle;