import React from "react";
import { Text, TextInput, StyleSheet } from "react-native";

const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <TextInput style={hasError && styles.errorInput}
        className="rounded border-2 border-gray-200 py-2 text-left px-4 w-[90%]"
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <Text className="text-red-600">{errors[name]}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
    errorInput: {
      borderColor: 'red',
    }
  })
  
  

export default CustomInput;
