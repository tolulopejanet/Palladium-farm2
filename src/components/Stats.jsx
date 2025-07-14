import { stats } from "../data";

const Stats = () => {
  return (
    <div className="w-full flex flex-col relative md:py-[30px] py-[20px] bg-gray4">
      <div className="w-full flex md:flex-row flex-col items-center justify-center gap-[72px]">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 items-center justify-center"
          >
            <span className="text-primary text-[50px] border rounded-full p-12">
              {item.value}
            </span>
            <span className="text-gray1 text-[20px]">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
