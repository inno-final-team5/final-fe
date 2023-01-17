import tw from "tailwind-styled-components";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <TwFooter>
      <p>
        &copy; <span>{thisYear}. </span>
        방구석평론가 All rights reserved
      </p>

      <a href="https://www.themoviedb.org/" title="TMDB API">
        Movie Data From TMDB API
      </a>
    </TwFooter>
  );
};

const TwFooter = tw.footer`
text-mWhite  text-center  flex gap-4 bottom:0 p-2 flex-col items-center justify-center pb-4

`;

export default Footer;
