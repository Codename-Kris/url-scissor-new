import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";


const SignUp: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSignUpClick = useCallback(async () => {
    try {
      // Perform sign-up API call or any necessary actions
      // Example: Sending a POST request to the sign-up endpoint

      // Replace the following code with your actual API call
      const response = await fetch("/api/signup", {
        method: "POST",
        // Add necessary headers and body data
        // Example: body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Sign-up was successful, redirect to a success page or any desired route
        navigate("/signup-success");
      } else {
        // Handle sign-up error
        // You can display an error message or perform additional actions
        console.log("Sign-up failed");
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error("Error during sign-up:", error);
    }
  }, [navigate]);

  const onLogInTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="sign-up1">
      <div className="frame-parent32">
        <div className="frame-parent33">
          <div className="sign-up-with-parent">
            <div className="sign-up-with">Sign up with:</div>
            <div className="google-group">
              <div className="google2">
                <div className="google3">Google</div>
                <img
                  className="logo-googleg-48dp-icon1"
                  alt=""
                  src="/logo-googleg-48dp.svg"
                />
              </div>
              <div className="google2">
                <img className="path-icon1" alt="" src="/path.svg" />
                <div className="apple3">Apple</div>
              </div>
            </div>
            <div className="vector-parent3">
              <img className="frame-child23" alt="" src="/vector-7.svg" />
              <div className="span4">
                <div className="or1">Or</div>
              </div>
              <img className="frame-child23" alt="" src="/vector-8.svg" />
            </div>
          </div>
          <div className="form-field2">
            <div className="big-label2">Username</div>
            <img className="left-icon2" alt="" src="/left.svg" />
            <img className="right-icon2" alt="" src="/right.svg" />
            <div className="top-part2">
              <div className="small-label-auto-layout2">
                <div className="smal-label2">Username</div>
              </div>
              <img className="top-line-icon2" alt="" src="/top-line.svg" />
            </div>
            <img className="bottom-line-icon2" alt="" src="/bottom-line.svg" />
          </div>
          <div className="form-field2">
            <div className="big-label2">Email</div>
            <img className="left-icon2" alt="" src="/left.svg" />
            <img className="right-icon2" alt="" src="/right.svg" />
            <div className="top-part2">
              <div className="small-label-auto-layout2">
                <div className="smal-label2">Email</div>
              </div>
              <img className="top-line-icon2" alt="" src="/top-line.svg" />
            </div>
            <img className="bottom-line-icon2" alt="" src="/bottom-line.svg" />
          </div>
          <div className="form-field2">
            <img className="vector-icon11" alt="" src="/vector5.svg" />
            <div className="form-field4">
              <div className="big-label2">Password</div>
              <img className="left-icon2" alt="" src="/left.svg" />
              <img className="right-icon2" alt="" src="/right.svg" />
              <div className="top-part2">
                <div className="small-label-auto-layout2">
                  <div className="smal-label2">Password</div>
                </div>
                <img className="top-line-icon2" alt="" src="/top-line.svg" />
              </div>
              <img
                className="bottom-line-icon2"
                alt=""
                src="/bottom-line.svg"
              />
            </div>
          </div>
        </div>
        <div className="form-field-wrapper">
          <div className="form-field4">
            <div className="big-label2">Retype Password</div>
            <img className="left-icon2" alt="" src="/left.svg" />
            <img className="right-icon2" alt="" src="/right.svg" />
            <div className="top-part2">
              <div className="small-label-auto-layout2">
                <div className="smal-label2">Retype Password</div>
              </div>
              <img className="top-line-icon2" alt="" src="/top-line.svg" />
            </div>
            <img className="bottom-line-icon2" alt="" src="/bottom-line.svg" />
          </div>
        </div>
        <div className="link-forgot1">{`6 or more characters, one number, one uppercase & one lower case.`}</div>
        <div className="button9" onClick={onSignUpClick}>
          <div className="sample-cta9">Sign up with Email</div>
          <div className="magic-wand9">
            <img className="magic-wand-icon9" alt="" src="/magic-wand9.svg" />
          </div>
        </div>
        <div className="already-have-an-account-parent">
          <div className="already-have-an">{`Already have an account? `}</div>
          <div className="log-in3" onClick={onLogInTextClick}>
            <span>Log in</span>
            <span className="span5">{` `}</span>
          </div>
        </div>
        <div className="span6">
          <div className="by-signing-up">{`By signing up, you agree to `}</div>
          <div className="sciccors-terms-of-container1">
            <span>{`Sciccor's `}</span>
            <span className="span5">Terms of Service</span>
            <span>{`, `}</span>
            <span className="span5">Privacy Policy</span>
            <span>{` and `}</span>
            <span className="span5">Acceptable Use Policy.</span>
          </div>
        </div>
      </div>
      <img className="vector-icon12" alt="" src="/vector5.svg" />
    </div>
  );
};

export default SignUp;
