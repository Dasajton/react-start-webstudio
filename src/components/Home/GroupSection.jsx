import Button from '../Utilities/Button';

const GroupSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-between px-6 lg:px-32 py-10">
      <img
        className="w-fit h-fit self-center"
        src="./images/group.svg"
        alt="group"
      />
      <div className="space-y-5 self-center w-1/2">
        <h2 className="font-crimson text-2xl lg:text-4xl font-bold tracking-[0.1rem]">
          Lorem ipsum dolor, sit amet consectetur
        </h2>
        <p className="text-[#212529]/50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          labore asperiores, ullam iure in ducimus. Earum cum molestiae
          obcaecati commodi nemo odio doloremque facere similique dolore
          exercitationem, harum nihil! Exercitationem!
        </p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

export default GroupSection;
