import { stats } from "../data";

const Stats = () => {
  return (
    <div className="w-full bg-[#F9FAFB] px-12 pt-24 pb-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#2B7810] mb-4">Our Impact</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We are committed to transforming agriculture by connecting farmers,
          improving yields, and supporting sustainable food production across
          our communities.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-[#2B7810] text-5xl font-extrabold border-4 border-[#2B7810] rounded-full w-32 h-32 flex items-center justify-center mb-4">
                {item.value}
              </div>
              <p className="text-lg text-gray-700 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
