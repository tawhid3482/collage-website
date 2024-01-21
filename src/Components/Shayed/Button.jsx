
const Button = ({text,icon}) => {
    return (
        <div>
            <button type="button" className=" text-white md:text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{text} </button>
        </div>
    );
};

export default Button;