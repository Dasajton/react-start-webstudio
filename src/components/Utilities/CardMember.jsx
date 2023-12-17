const CardMember = props => {
  return (
    <div className="p-4 border rounded flex flex-col  gap-5 team-card">
      <img src={props.img} alt={props.firstName} />
      <h3 className="font-bold font-crimson text-xl">
        {props.firstName} {props.lastName}
      </h3>
      <p className="font-work font-medium text-[#212529]/60">{props.title}</p>
    </div>
  );
};

export default CardMember;
