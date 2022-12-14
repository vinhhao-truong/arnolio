import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactProps from "../../interfaces/ReactProps";
import { selectGlobalState } from "../../redux/globalStateSlice";
import LoadingGlobal from "../LoadingGlobal";
import Mask from "../common/Mask";
import TopProgressBar from "../TopProgressBar";
import Footer from "./Footer";
import Navigation from "./Navigation";
import ScrollTopBtn from "./ScrollTopBtn";
import SideNav from "./SideNav";

const Layout: React.FC<ReactProps> = ({ children }) => {
  const [isScrollDown, setIsScrolledDown] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const { isGlobalLoading, isMasked } = useSelector(selectGlobalState);

  //Check and get scroll pos
  useEffect(() => {
    scrollY.onChange((pos) => {
      if (pos > 0) {
        setIsScrolledDown(true);
        // console.log(pos);
        return;
      }
      setIsScrolledDown(false);
    });
  }, [scrollY, isScrollDown]);

  useEffect(() => {
    if (isGlobalLoading) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "auto";
  }, [isGlobalLoading]);

  return (
    <div className="flex flex-col items-center dark">
      <Mask />
      <Navigation
        className={`w-full z-10 max-w-[120rem] lg:px-[9rem] xl:px-40`}
      />
      <SideNav />
      {children}
      <Footer />
      {/* Global Components */}
      {isScrollDown && <ScrollTopBtn />}
      <TopProgressBar />
      <LoadingGlobal />
    </div>
  );
};

export default Layout;
