import tw from "tailwind-styled-components";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <TwFooter>
      <p>
        &copy; <span>{thisYear}</span> Copyright: 방구석평론가
      </p>
    </TwFooter>
  );
};

const TwFooter = tw.footer`
text-mWhite  text-center lg:text-left bottom:0 h-8 pt-2

`;

export default Footer;
