import { RiLinkedinFill, RiTwitterFill, RiGithubFill, RiInstagramFill, RiInstagramLine } from "react-icons/ri";

const socials = [
  {
    id: 1,
    name: "LinkedIn",
    link: "",
    icon: <RiLinkedinFill />,
  },
  {
    id: 2,
    name: "Github",
    link: "",
    icon: <RiGithubFill />,
  },
  {
    id: 3,
    name: "Twitter",
    link: "",
    icon: <RiTwitterFill />,
  },

];

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center p-4">
      <h1 className="h1 md:p-8">{'< '}<span className="text-accent">tanya{' '}gupta</span>{' />'}</h1>
      <ul className="flex flex-row justify-center md:justify-evenly items-center gap-[0.5rem] md:gap-[4rem] p-3 md:mr-8">
        {socials.map((item) => (
          <li className="text-white h1 hover:text-accent" key={item.id}>
            <a href={item.link}>{item.icon}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
