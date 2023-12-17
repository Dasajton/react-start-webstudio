import Button from '../Utilities/Button';

const PartnerSection = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="text-center">
        <h3 className="uppercase text-[#74C69D] font-work font-bold tracking-[0.3rem] pb-4">
          Partners
        </h3>
        <h2 className="text-xl lg:text-4xl font-crimson font-bold tracking-[0.1rem] pb-4">
          Lorem Ipsum Dolor
        </h2>
        <p className="font-work">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="flex flex-col flex-wrap lg:flex-row w-fit h-fit gap-10 py-14">
        <img src="./images/google.svg" alt="google" />
        <img src="./images/microsoft.svg" alt="microsoft" />
        <img src="./images/airbnb.svg" alt="airbnb" />
        <img src="./images/facebook.svg" alt="facebook" />
        <img src="./images/spotify.svg" alt="spotify" />
      </div>

      <Button>Learn More</Button>
    </div>
  );
};

export default PartnerSection;
