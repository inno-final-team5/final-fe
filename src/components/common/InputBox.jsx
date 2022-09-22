import tw from "tailwind-styled-components/";

const InputBox = ({ ...props }) => {
  return (
    <InputContainer>
      <Input
        type={props.type}
        placeholder={props.helperText}
        required
        value={props.value}
        onChange={props.onChange}
      />
      <p>{props.errorMessage}</p>
    </InputContainer>
  );
};

const InputContainer = tw.div`
    mb-6
`;

const Input = tw.input`
    form-control 
    block 
    w-full 
    px-4 
    py-2
    text-xl
    font-normal
    text-gray-700
    bg-white
    bg-clip-padding
    border
    border-solid
    border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700
    focus:bg-white
    focus:border-mSecondaryColor
    focus:outline-none
`;

export default InputBox;
