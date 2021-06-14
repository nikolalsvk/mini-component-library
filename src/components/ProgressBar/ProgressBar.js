/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const barStyles = {
    large: {
      "--line-height": "16px",
      "--radius": "8px",
      "--pading": "4px",
    },
    medium: {
      "--line-height": "12px",
      "--radius": "4px",
      "--pading": 0,
    },
    small: {
      "--line-height": "8px",
      "--radius": "4px",
      "--pading": 0,
    },
  };

  const style = barStyles[size];

  return (
    <BarBase
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={style}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <BarLine width={value} />
      </BarWrapper>
    </BarBase>
  );
};

const BarBase = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;

  border-radius: var(--radius);
  padding: var(--pading);
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const BarLine = styled.div`
  height: var(--line-height);
  width: ${(prop) => prop.width}%;
  background: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
`;

export default ProgressBar;
