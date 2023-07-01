import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./GetAQuote.css";
const GetAQuote: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogInTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="get-a-quote">
      <div className="footer1">
        <div className="frame-parent28">
          <div className="why-scissor-group">
            <div className="why-scissor2">
              <div className="why-scissor3">Why Scissor ?</div>
              <div className="p7">
                <div className="why-scissor3">
                  <p className="scissor-1011">Scissor 101</p>
                  <p className="scissor-1011">{`Integrations & API`}</p>
                  <p className="scissor-1011">Pricing</p>
                </div>
              </div>
            </div>
            <div className="why-scissor2">
              <div className="why-scissor3">Resources</div>
              <div className="p7">
                <div className="why-scissor3">
                  <p className="scissor-1011">Blog</p>
                  <p className="scissor-1011">Resource Library</p>
                  <p className="scissor-1011">Developers</p>
                  <p className="scissor-1011">App Connectors</p>
                  <p className="scissor-1011">Support</p>
                  <p className="scissor-1011">Trust Center</p>
                  <p className="scissor-1011">Browser Extension</p>
                  <p className="scissor-1011">Mobile App</p>
                </div>
              </div>
            </div>
          </div>
          <div className="solutions-group">
            <div className="why-scissor2">
              <div className="why-scissor3">Solutions</div>
              <div className="p7">
                <div className="why-scissor3">
                  <p className="scissor-1011">Social Media</p>
                  <p className="scissor-1011">Digital Marketing</p>
                  <p className="scissor-1011">Customer Service</p>
                  <p className="scissor-1011">For Developers</p>
                </div>
              </div>
            </div>
            <div className="why-scissor2">
              <div className="why-scissor3">Features</div>
              <div className="p10">
                <div className="why-scissor3">
                  <p className="scissor-1011">Branded Links</p>
                  <p className="scissor-1011">Mobile Links</p>
                  <p className="scissor-1011">Campaign</p>
                  <p className="scissor-1011">{`Management &`}</p>
                  <p className="scissor-1011">Analytics</p>
                  <p className="scissor-1011">QR Code generation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="why-scissor-group">
            <div className="why-scissor2">
              <div className="why-scissor3">Products</div>
              <div className="p7">
                <div className="why-scissor3">
                  <p className="scissor-1011">Link Management</p>
                  <p className="scissor-1011">QR Codes</p>
                  <p className="scissor-1011">Link-in-bio</p>
                </div>
              </div>
            </div>
            <div className="why-scissor2">
              <div className="why-scissor3">Legal</div>
              <div className="p7">
                <div className="why-scissor3">
                  <p className="scissor-1011">Privacy Policy</p>
                  <p className="scissor-1011">Cookie Policy</p>
                  <p className="scissor-1011">Terms of Service</p>
                  <p className="scissor-1011">Acceptable Use Policy</p>
                  <p className="scissor-1011">Code of Conduct</p>
                </div>
              </div>
            </div>
          </div>
          <div className="why-scissor2">
            <div className="company3">Company</div>
            <div className="p7">
              <div className="why-scissor3">
                <p className="scissor-1011">About Scissor</p>
                <p className="scissor-1011">Careers</p>
                <p className="scissor-1011">Partners</p>
                <p className="scissor-1011">Press</p>
                <p className="scissor-1011">Contact</p>
                <p className="scissor-1011">Reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-group">
          <div className="logo2" onClick={onLogoContainerClick}>
            <img className="vector-icon3" alt="" src="/vector2.svg" />
            <img className="logo-inner" alt="" src="/vector-22.svg" />
            <div className="scissor2">SCISSOR</div>
          </div>
          <div className="socials1">
            <img
              className="ifi-social-twitter-icon1"
              alt=""
              src="/ifisocialtwitter.svg"
            />
            <img
              className="ifi-social-twitter-icon1"
              alt=""
              src="/svgfeather1.svg"
            />
            <img
              className="ifi-social-twitter-icon1"
              alt=""
              src="/ifisociallinkedin1.svg"
            />
            <img
              className="ifi-social-twitter-icon1"
              alt=""
              src="/ifisocialfacebook.svg"
            />
          </div>
        </div>
        <img className="footer-inner" alt="" src="/group-24.svg" />
        <img className="footer-child1" alt="" src="/group-35.svg" />
        <div className="term-of-service-group">
          <div className="term-of-service1">Term of Service</div>
          <img className="frame-child17" alt="" src="/vector-5.svg" />
          <div className="term-of-service1">Security</div>
          <img className="frame-child17" alt="" src="/vector-5.svg" />
          <div className="term-of-service1">ⓒ Scissor 2023</div>
        </div>
      </div>
      <div className="get-a-quote1">
        <div className="get-a-quote-child" />
        <img className="untitled-1-2-icon" alt="" src="/untitled1-2@2x.png" />
        <img
          className="unsplashevp4inf3dhq-icon"
          alt=""
          src="/unsplashevp4inf3dhq@2x.png"
        />
        <div className="form-parent">
          <div className="form">
            <div className="fieldset">
              <div className="divhs-firstname">
                <div className="label">
                  <div className="first-name">First Name*</div>
                </div>
                <div className="input" />
              </div>
              <div className="divhs-lastname">
                <div className="label">
                  <div className="last-name">Last Name*</div>
                </div>
                <div className="input" />
              </div>
            </div>
            <div className="fieldset1">
              <div className="label2">
                <div className="company-name">Company Name*</div>
              </div>
              <div className="input2" />
            </div>
            <div className="fieldset2">
              <div className="label2">
                <div className="business-email-address">
                  Business Email Address*
                </div>
              </div>
              <div className="input" />
            </div>
            <div className="fieldset3">
              <div className="label2">
                <div className="phone-number">Phone Number*</div>
              </div>
              <div className="input" />
            </div>
            <div className="fieldset4">
              <div className="label2">
                <div className="job-title">Job Title*</div>
              </div>
              <div className="options">
                <div className="div">
                  <div className="please-select">Please Select</div>
                </div>
                <div className="inputstate7">
                  <img className="vector-icon4" alt="" src="/vector3.svg" />
                </div>
              </div>
            </div>
            <div className="fieldset5">
              <div className="label2">
                <div className="company-size">Company Size*</div>
              </div>
              <div className="options1">
                <div className="div">
                  <div className="please-select1">Please Select</div>
                </div>
                <div className="inputstate71">
                  <img className="vector-icon4" alt="" src="/vector3.svg" />
                </div>
              </div>
            </div>
            <div className="fieldset6">
              <div className="label2">
                <div className="primary-use-case">Primary Use Case*</div>
              </div>
              <div className="options">
                <div className="div">
                  <div className="please-select2">Please Select</div>
                </div>
                <div className="inputstate72">
                  <img className="vector-icon4" alt="" src="/vector3.svg" />
                </div>
              </div>
            </div>
            <div className="fieldset7">
              <div className="label2">
                <div className="country">Country*</div>
              </div>
              <div className="options">
                <div className="div">
                  <div className="please-select3">Please Select</div>
                </div>
                <div className="inputstate73">
                  <img className="vector-icon4" alt="" src="/vector3.svg" />
                </div>
              </div>
            </div>
            <div className="scissor-requires-the">
              Scissor requires the contact information you provide in order to
              reach out to you regarding our products and services. You have the
              option to unsubscribe from these communications whenever you wish.
              To learn more about how to unsubscribe, our privacy practices, and
              our dedication to safeguarding your privacy, please refer to our
              Privacy Policy.
            </div>
            <div className="button6">
              <div className="sample-cta6">{`Submit `}</div>
              <div className="magic-wand6">
                <img
                  className="magic-wand-icon6"
                  alt=""
                  src="/magic-wand6.svg"
                />
              </div>
            </div>
          </div>
          <div className="lets-get-in">Let's get in touch</div>
        </div>
        <div className="header1">
          <div className="logo3">
            <img className="vector-icon3" alt="" src="/vector4.svg" />
            <img className="logo-inner" alt="" src="/vector-23.svg" />
            <div className="scissor2">SCISSOR</div>
          </div>
          <div className="my-urls-group">
            <div className="my-urls1">My URLs</div>
            <div className="features-group">
              <div className="features5">Features</div>
              <img
                className="chevron-down-icon1"
                alt=""
                src="/chevrondown1.svg"
              />
            </div>
            <div className="my-urls1">Pricing</div>
            <div className="my-urls1">Analytics</div>
            <div className="my-urls1">FAQs</div>
          </div>
          <div className="log-in-group">
            <div className="log-in1" onClick={onLogInTextClick}>
              Log in
            </div>
            <div className="button7">
              <div className="sample-cta6">Try for free</div>
              <div className="magic-wand6">
                <img
                  className="magic-wand-icon6"
                  alt=""
                  src="/magic-wand7.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
