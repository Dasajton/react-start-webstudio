import teamMember from '../../data/teamMember';
import CardMember from '../Utilities/CardMember';

const TeamSection = () => {
  const teamCards = teamMember.map(member => {
    return (
      <CardMember
        key={member.id}
        img={member.img}
        firstName={member.firstName}
        lastName={member.lastName}
        title={member.title}
      />
    );
  });

  return (
    <div className="flex flex-col items-center justify-center gap-12 py-10 px-6 lg:px-32">
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
      <div className="flex flex-wrap justify-center gap-12">{teamCards}</div>
    </div>
  );
};

export default TeamSection;
