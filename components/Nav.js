import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import Link from "next/link";
import { useRouter } from "next/router";

//  links
const links = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center p-20 xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:left-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex xl:flex-col gap-6 md:gap-10 text-white bg-white/10 p-6 md:p-8 justify-center items-center text-2xl rounded-full">
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-accent"
              } items-center hover:text-accent transition-all duration-300 flex group`}
            >
              <div className='absolute -left-10 hidden xl:group-hover:flex '>
              <div className='bg-white text-primary text-[12px] p-[6px] rounded-[3px] relative leading-none capitalize'>{link.name}</div>
              <div className='top-1 -right-1 border-solid border-l-white border-l-8 border-y-transparent border-y-8 border-r-0 absolute -right-2'></div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
