import React from "react";
import FMUI from 'formsy-material-ui';

const { FormsyText } = FMUI;
const defaultStyle = {
  width: "100%"
};

export default class AppText extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormsyText
        {...this.props}
        style={defaultStyle}
        formNoValidate
        />
    );
  }
}
