import Button from '../Utilities/Button';

const HeroSection = () => {
  return (
    <div className="w-full bg-lightgreen text-white py-10 px-6 lg:px-32 flex flex-col justify-evenly lg:flex-row-reverse lg:justify-between gap-4">
      <img
        className="w-fit h-fit self-center"
        src="./images/hero-people.png"
        alt="hero working together"
      />
      <div className="flex flex-col gap-4 py-20">
        <h3 className="font-work uppercase font-bold tracking-[0.3rem]">
          Welcome
        </h3>
        <h1 className="font-crimson text-4xl font-bold tracking-[0.1rem]">
          Lorem ipsum dolor sit amet, consectetur
        </h1>
        <p className="font-work text-white/80 lg:w-3/4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
          voluptate culpa nesciunt delectus iste?
        </p>
        <div>
          <Button variant="secundary" size="lg">
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
