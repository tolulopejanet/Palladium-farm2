import { features } from "../data";

const Features = () => {
  return (
    <div className="w-full flex flex-col relative md:px-[120px]">
      <div className="w-full flex md:flex-row flex-col items-center justify-center gap-[24px]">
        {features.map((item, index) => (
          <div
            className="w-fit px-[50px] rounded-[12px] bg-white/4 border border-grayborder py-[50px] flex flex-col gap-[35px] items-center justify-center"
            key={index}
          >
            <img src={item.icon} alt={item.title} />
            <div className="flex flex-col gap-4 items-center justify-center">
              <span className="text-black text-[20px]">{item.title}</span>
              <p className="text-black max-w-[310px] text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[420px] rounded-full bg-overlay/7 blur-3xl"></div>
    </div>
  );
};

export default Features;
