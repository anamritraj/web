import styled from 'styled-components';
import constants from '../constants';

export const StyledDiv = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;

  & svg {
    vertical-align: middle;
    height: 26px !important;
    width: 26px !important;
    margin-right: 6px;
    opacity: 0.8;
    fill: ${constants.textColorPrimary};
  }

  & a {
    color: ${constants.primaryTextColor};
    text-decoration: none;

    &:hover {
      color: ${constants.primaryLinkColor};
    }
  }

  & .title {
    font-size: 20px;
  }

  & .subtitle {
    margin-left: 5px;
    font-size: ${constants.fontSizeMedium};
    color: ${constants.colorMutedLight};
  }

  .sponsor-button {
    margin: 0px 5px;
    
    /* Material-ui buttons */
    @media only screen and (max-width: 620px) {
      & a {
        min-width: 24px !important;
  
        & span {
          font-size: 0 !important;
          padding-left: 0 !important;
          padding-right: 12px !important;
        }
      }
    }
  }
  
  & .info {
    margin-left: 5px;
    font-size: ${constants.fontSizeMedium};
    color: ${constants.colorMuted};
    border-bottom: 1px dotted ${constants.colorMuted};
  }
`;

export const TwoLineDiv = StyledDiv.extend`
  text-align: center;
  padding: 10px 0 15px;

  & span:last-child {
    display: block;
    text-transform: lowercase;
  }
`;
