import { IMaskInput } from "react-imask";
import { forwardRef } from "react";
import NumberFormat from "react-number-format";

const PhoneNumberMask = forwardRef(function PhoneNumberMask(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const NumberInputMask = forwardRef(function NumberInputMask(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
      allowNegative={false}
      decimalScale={0}
    />
  );
});

export { PhoneNumberMask, NumberInputMask };
