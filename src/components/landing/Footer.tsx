import { Heart } from "lucide-react";
const Footer = () => {
  return (
    <footer className="w-full p-4 px-32 py-8 flex justify-between items-center border-t-2 bg-primary text-primary-foreground">
      <div className="flex gap-1">
        Made with <Heart fill="red" /> by Abhay Kamath
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/abhaykamath/form-forge" target="_blank">
          <i className="fa-brands fa-github text-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/m-abhay-kamath-b5b466129/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin text-2xl"></i>
        </a>
        <a href="https://x.com/m_abhaykamath" target="_blank">
          <i className="fa-brands fa-square-x-twitter text-2xl"></i>
        </a>
      </div>
      <div className="flex gap-2">
        <span>powered by - </span>
        <a href="https://ui.shadcn.com/" target="_blank" className="">
          shadcn
        </a>
        <a href="https://tailwindcss.com/" target="_blank" className="">
          tailwind v4.1
        </a>
        <a href="https://zustand-demo.pmnd.rs/" target="_blank" className="">
          zustand
        </a>
      </div>
    </footer>
  );
};

export default Footer;
