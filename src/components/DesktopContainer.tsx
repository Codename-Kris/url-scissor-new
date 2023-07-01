import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import "./DesktopContainer.css";

type DesktopContainerType = {
  // Props for content
  basic?: string;
  free?: string;
  freePlanForAllUsers?: string;
  unlimitedURLShortening?: string;
  basicLinkAnalytics?: string;
  customizableShortLinks?: string;
  standardSupport?: string;
  adSupported?: string;

  // Style props
  propLeft?: Property.Left;
  propLeft1?: Property.Left;
  propColor?: Property.Color;
  propColor1?: Property.Color;
  propColor2?: Property.Color;
};

const DesktopContainer: FunctionComponent<DesktopContainerType> = ({
  basic,
  free,
  freePlanForAllUsers,
  unlimitedURLShortening,
  basicLinkAnalytics,
  customizableShortLinks,
  standardSupport,
  adSupported,
  propLeft,
  propLeft1,
  propColor,
  propColor1,
  propColor2,
}) => {
  // Memoized styles
  const desktop10Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const basicStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const customizableShortLinksStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const standardSupportStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const adSupportedStyle: CSS.Properties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div className="desktop-101" style={desktop10Style}>
      <div className="basic" style={basicStyle}>
        {basic}
      </div>
      <div className="frame-parent34">
        <div className="free-parent">
          <div className="free">{free}</div>
          <div className="free-plan-for">{freePlanForAllUsers}</div>
        </div>
        
        <div className="frame-parent35">
          <div className="check-circle-parent3">
            <img className="check-circle-icon5" alt="" src="/checkcircle.svg" />
            <div className="unlimited-url-shortening">
              {unlimitedURLShortening}
            </div>
          </div>
          <div className="check-circle-parent3">
            <img className="check-circle-icon5" alt="" src="/checkcircle.svg" />
            <div className="unlimited-url-shortening">{basicLinkAnalytics}</div>
          </div>
          <div className="check-circle-parent5">
            <img className="check-circle-icon5" alt="" src="/checkcircle.svg" />
            <div
              className="unlimited-url-shortening"
              style={customizableShortLinksStyle}
            >
              {customizableShortLinks}
            </div>
          </div>
          <div className="check-circle-parent5">
            <img className="check-circle-icon5" alt="" src="/checkcircle.svg" />
            <div
              className="unlimited-url-shortening"
              style={standardSupportStyle}
            >
              {standardSupport}
            </div>
          </div>
          <div className="check-circle-parent5">
            <img className="check-circle-icon5" alt="" src="/checkcircle.svg" />
            <div className="unlimited-url-shortening" style={adSupportedStyle}>
              {adSupported}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopContainer;
