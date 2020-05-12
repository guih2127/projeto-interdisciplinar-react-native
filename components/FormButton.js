import React from 'react'
import { Button } from 'react-native-elements'

const FormButton = ({ title, buttonType, buttonColor, ...rest }) => (
  <Button
    {...rest}
    type={buttonType}
    title={title}
    buttonStyle={{ borderColor: "#015A1D", borderRadius: 20 }}
    titleStyle={{ color: "#015A1D" }}
  />
)

export default FormButton