import tw from "tailwind-styled-components";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <TwFooter>
      <p>
        &copy; <span>{thisYear}</span> Copyright: 방구석평론가
      </p>
      <a href="https://www.flaticon.com/free-icons/genre" title="genre icons">
        Genre icons created by Freepik - Flaticon
      </a>

      <a
        href="https://developers.themoviedb.org/3/getting-started/introduction"
        title="TMDB API"
      >
        Movie Data From TMDB API
      </a>
    </TwFooter>
  );
};

const TwFooter = tw.footer`
text-mWhite  text-center lg:text-left h-8 flex gap-12 bottom:0 p-2

`;

export default Footer;
