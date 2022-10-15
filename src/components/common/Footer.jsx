import tw from "tailwind-styled-components";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <TwFooter>
      <p>
        &copy; <span>{thisYear}</span> Copyright: 방구석평론가
      </p>

      <a href="https://www.themoviedb.org/" title="TMDB API">
        Movie Data From TMDB API
      </a>
    </TwFooter>
  );
};

const TwFooter = tw.footer`
text-mWhite  text-center lg:text-left h-8 flex gap-12 bottom:0 p-2 flex-col md:flex-row

`;

export default Footer;
