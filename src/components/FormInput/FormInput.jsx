import { FormInputLabel, Group, Input } from "./FormInput.styles";

const FormInput = ({ labelOptions, inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />
      {labelOptions.label && (
        <FormInputLabel shrink={inputOptions.value.length}>
          {labelOptions.label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
