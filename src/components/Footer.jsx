const Footer = () => {
  return (
    <div className="w-full h-32 bg-lightgreen mt-10 flex flex-col lg:flex-row items-center justify-evenly lg:justify-between px-6 lg:px-32">
      <div className="flex gap-5">
        <img src="./images/icons/facebook.svg" alt="facebook" />
        <img src="./images/icons/instagram.svg" alt="instagram" />
        <img src="./images/icons/twitter.svg" alt="twitter" />
        <img src="./images/icons/pinterest.svg" alt="pinterest" />
        <img src="./images/icons/music.svg" alt="music" />
        <img src="./images/icons/whatsapp.svg" alt="whatsapp" />
        <img src="./images/icons/youtube.svg" alt="youtube" />
      </div>

      <p className="font-work font-medium text-white text-lg">
        © Start, 2022. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
