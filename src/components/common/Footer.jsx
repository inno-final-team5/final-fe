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
    </TwFooter>
  );
};

const TwFooter = tw.footer`
text-mWhite  text-center lg:text-left bottom:0 h-8 pt-2 flex gap-12

`;

export default Footer;
