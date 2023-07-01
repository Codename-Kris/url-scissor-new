import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";


const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignUpTextClick = useCallback(() => {
    navigate("/signup"); // Navigate to the signup page ("/signup")
  }, [navigate]);

  return (
    <div className="login">
      <div className="footer2">
        <div className="frame-parent29">
          <div className="why-scissor-container">
            <div className="why-scissor4">
              <div className="or">Why Scissor ?</div>
              <div className="p14">
                <div className="or">
                  <p className="scissor-1012">Scissor 101</p>
                  <p className="scissor-1012">{`Integrations & API`}</p>
                  <p className="scissor-1012">Pricing</p>
                </div>
              </div>
            </div>
            <div className="why-scissor4">
              <div className="or">Resources</div>
              <div className="p14">
                <div className="or">
                  <p className="scissor-1012">Blog</p>
                  <p className="scissor-1012">Resource Library</p>
                  <p className="scissor-1012">Developers</p>
                  <p className="scissor-1012">App Connectors</p>
                  <p className="scissor-1012">Support</p>
                  <p className="scissor-1012">Trust Center</p>
                  <p className="scissor-1012">Browser Extension</p>
                  <p className="scissor-1012">Mobile App</p>
                </div>
              </div>
            </div>
          </div>
          <div className="solutions-container">
            <div className="why-scissor4">
              <div className="or">Solutions</div>
              <div className="p14">
                <div className="or">
                  <p className="scissor-1012">Social Media</p>
                  <p className="scissor-1012">Digital Marketing</p>
                  <p className="scissor-1012">Customer Service</p>
                  <p className="scissor-1012">For Developers</p>
                </div>
              </div>
            </div>
            <div className="why-scissor4">
              <div className="or">Features</div>
              <div className="p17">
                <div className="or">
                  <p className="scissor-1012">Branded Links</p>
                  <p className="scissor-1012">Mobile Links</p>
                  <p className="scissor-1012">Campaign</p>
                  <p className="scissor-1012">{`Management &`}</p>
                  <p className="scissor-1012">Analytics</p>
                  <p className="scissor-1012">QR Code generation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="why-scissor-container">
            <div className="why-scissor4">
              <div className="or">Products</div>
              <div className="p14">
                <div className="or">
                  <p className="scissor-1012">Link Management</p>
                  <p className="scissor-1012">QR Codes</p>
                  <p className="scissor-1012">Link-in-bio</p>
                </div>
              </div>
            </div>
            <div className="why-scissor4">
              <div className="or">Legal</div>
              <div className="p14">
                <div className="or">
                  <p className="scissor-1012">Privacy Policy</p>
                  <p className="scissor-1012">Cookie Policy</p>
                  <p className="scissor-1012">Terms of Service</p>
                  <p className="scissor-1012">Acceptable Use Policy</p>
                  <p className="scissor-1012">Code of Conduct</p>
                </div>
              </div>
            </div>
          </div>
          <div className="why-scissor4">
            <div className="company5">Company</div>
            <div className="p14">
              <div className="or">
                <p className="scissor-1012">About Scissor</p>
                <p className="scissor-1012">Careers</p>
                <p className="scissor-1012">Partners</p>
                <p className="scissor-1012">Press</p>
                <p className="scissor-1012">Contact</p>
                <p className="scissor-1012">Reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-container">
          <div className="logo4" onClick={onLogoContainerClick}>
            <img className="vector-icon9" alt="" src="/vector2.svg" />
            <img className="logo-child2" alt="" src="/vector-22.svg" />
            <div className="scissor4">SCISSOR</div>
          </div>
          <div className="socials2">
            <img
              className="ifi-social-twitter-icon2"
              alt=""
              src="/ifisocialtwitter.svg"
            />
            <img
              className="ifi-social-twitter-icon2"
              alt=""
              src="/svgfeather2.svg"
            />
            <img
              className="ifi-social-twitter-icon2"
              alt=""
              src="/ifisociallinkedin2.svg"
            />
            <img
              className="ifi-social-twitter-icon2"
              alt=""
              src="/ifisocialfacebook.svg"
            />
          </div>
        </div>
        <img className="footer-child2" alt="" src="/group-25.svg" />
        <img className="footer-child3" alt="" src="/group-36.svg" />
        <div className="term-of-service-container">
          <div className="term-of-service2">Term of Service</div>
          <img className="frame-child19" alt="" src="/vector-5.svg" />
          <div className="term-of-service2">Security</div>
          <img className="frame-child19" alt="" src="/vector-5.svg" />
          <div className="term-of-service2">ⓒ Scissor 2023</div>
        </div>
      </div>
      <div className="log-in2">
        <div className="frame-parent30">
          <div className="frame-parent31">
            <div className="log-in-with-parent">
              <div className="log-in-with">Log in with:</div>
              <div className="google-parent">
                <div className="google">
                  <div className="google1">Google</div>
                  <img
                    className="logo-googleg-48dp-icon"
                    alt=""
                    src="/logo-googleg-48dp.svg"
                  />
                </div>
                <div className="google">
                  <img className="path-icon" alt="" src="/path.svg" />
                  <div className="apple1">Apple</div>
                </div>
              </div>
              <div className="vector-parent2">
                <img className="frame-child21" alt="" src="/vector-7.svg" />
                <div className="span2">
                  <div className="or">Or</div>
                </div>
                <img className="frame-child21" alt="" src="/vector-8.svg" />
              </div>
            </div>
            <div className="form-field">
              <div className="big-label">Email address or username</div>
              <img className="left-icon" alt="" src="/left.svg" />
              <img className="right-icon" alt="" src="/right.svg" />
              <div className="top-part">
                <div className="small-label-auto-layout">
                  <div className="smal-label">Email address or username</div>
                </div>
                <img className="top-line-icon" alt="" src="/top-line.svg" />
              </div>
              <img className="bottom-line-icon" alt="" src="/bottom-line.svg" />
            </div>
            <div className="form-field">
              <img className="vector-icon10" alt="" src="/vector5.svg" />
              <div className="form-field1">
                <div className="big-label">Password</div>
                <img className="left-icon" alt="" src="/left.svg" />
                <img className="right-icon" alt="" src="/right.svg" />
                <div className="top-part">
                  <div className="small-label-auto-layout">
                    <div className="smal-label">Password</div>
                  </div>
                  <img className="top-line-icon" alt="" src="/top-line.svg" />
                </div>
                <img
                  className="bottom-line-icon"
                  alt=""
                  src="/bottom-line.svg"
                />
              </div>
            </div>
          </div>
          <div className="link-forgot">Forgot your password?</div>
          <div className="button8">
            <div className="sample-cta8">Log in</div>
            <div className="magic-wand8">
              <img className="magic-wand-icon8" alt="" src="/magic-wand8.svg" />
            </div>
          </div>
          <div className="dont-have-an-account-parent">
            <div className="dont-have-an">{`Don’t have an account?  `}</div>
            <div className="sign-up" onClick={onSignUpTextClick}>
              Sign up
            </div>
          </div>
          <div className="span3">
            <div className="by-signing-in">{`By signing in with  an account, you agree to `}</div>
            <div className="sciccors-terms-of-container">
              <span>{`Sciccor's `}</span>
              <span className="terms-of-service4">Terms of Service</span>
              <span>{`, `}</span>
              <span className="terms-of-service4">Privacy Policy</span>
              <span>{` and `}</span>
              <span className="terms-of-service4">Acceptable Use Policy.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
