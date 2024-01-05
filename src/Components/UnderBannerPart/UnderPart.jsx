import UnderCard from "./UnderCard";
import UseUnder from "../../Hooks/UseUnder";

const UnderPart = () => {
  const [underpart] = UseUnder();
  return (
    <div className="flex justify-center items-center flex-col md:ml-8 lg:ml-0 md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
      {underpart?.map((under) => (
        <UnderCard key={under.name} under={under}></UnderCard>
      ))}
    </div>
  );
};

export default UnderPart;
