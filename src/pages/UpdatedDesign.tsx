import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DesktopContainer from "../components/DesktopContainer";
import "./UpdatedDesign.css";
const UpdatedDesign: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogInTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="updateddesign">
      <div className="hero-section">
        <img className="aurora-icon" alt="" src="/aurora.svg" />
        <div className="frame-parent">
          <div className="group-parent">
            <div className="optimize-your-online-experienc-parent">
              <div className="optimize-your-online-container">
                <span> Optimize Your Online Experience with Our Advanced</span>
                <span className="url-shortening"> URL Shortening</span>
                <span> Solution</span>
              </div>
              <img className="group-child" alt="" src="/vector-3.svg" />
            </div>
            <div className="personalize-your-shortened">
              Personalize your shortened URLs to align with your brand identity.
              Utilize custom slugs, branded links, and domain customization
              options to reinforce your brand presence and enhance user
              engagement.
            </div>
          </div>
          <div className="button-parent">
            <div className="button">
              <div className="sample-cta">Sign Up</div>
              <div className="magic-wand">
                <img className="magic-wand-icon" alt="" src="/magic-wand.svg" />
              </div>
            </div>
            <div className="learn-more">Learn more</div>
          </div>
        </div>
        <img className="hero-section-child" alt="" src="/group-3.svg" />
        <div className="vector-parent">
          <img className="group-item" alt="" src="/vector-2.svg" />
          <div className="frame-group">
            <div className="frame-container">
              <div className="link-2-parent">
                <img className="link-2-icon" alt="" src="/link2.svg" />
                <img className="link-2-icon1" alt="" src="/link2.svg" />
                <img className="link-2-icon1" alt="" src="/link2.svg" />
              </div>
              <img className="frame-child" alt="" src="/line-7.svg" />
              <img className="link-2-icon" alt="" src="/link2.svg" />
            </div>
            <div className="seamlessly-transform-your-container">
              <span>{`Seamlessly transform your long URLs into `}</span>
              <span className="concise">concise</span>
              <span>{` and `}</span>
              <span className="concise">shareable links</span>
              <span> with just few clicks.</span>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="logo">
            <img className="vector-icon" alt="" src="/vector.svg" />
            <img className="logo-child" alt="" src="/vector-21.svg" />
            <div className="scissor">SCISSOR</div>
          </div>
          <div className="my-urls-parent">
            <div className="learn-more">My URLs</div>
            <div className="features-parent">
              <div className="features">Features</div>
              <img
                className="chevron-down-icon"
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className="pricing">Pricing</div>
            <div className="pricing">Analytics</div>
            <div className="pricing">FAQs</div>
          </div>
          <div className="log-in-parent">
            <div className="log-in" onClick={onLogInTextClick}>
              Log in
            </div>
            <div className="button1">
              <div className="sample-cta">Try for free</div>
              <div className="magic-wand">
                <img
                  className="magic-wand-icon"
                  alt=""
                  src="/magic-wand1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-10">
        <div className="frame-div">
          <div className="link-2-parent">
            <div className="one-stop-four-possibilities-container">
              <p className="one-stop">One Stop.</p>
              <p className="one-stop">
                <span>Four</span>
                <span className="url-shortening"> Possibilities</span>
                <span className="span">.</span>
              </p>
            </div>
          </div>
          <div className="frame-parent1">
            <div className="frame-parent2">
              <div className="m-parent">
                <div className="m">3M</div>
                <div className="active-users">Active users</div>
              </div>
              <div className="m-group">
                <div className="m">60M</div>
                <div className="links-qr">{`Links & QR codes created`}</div>
              </div>
            </div>
            <div className="frame-parent2">
              <div className="frame-wrapper">
                <div className="link-2-parent">
                  <div className="m-parent">
                    <div className="m">1B</div>
                    <div className="clicked-scanned">{`Clicked & Scanned connections`}</div>
                  </div>
                </div>
              </div>
              <div className="m-parent">
                <div className="m">300k</div>
                <div className="active-users">App Integrations</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent4">
          <div className="frame-parent5">
            <div className="vector-group">
              <img className="frame-item" alt="" src="/line-70.svg" />
              <div className="why-choose-scissors-container">
                <span>{`Why choose `}</span>
                <span className="url-shortening">Scissors</span>
              </div>
            </div>
            <div className="scissors-is-the">{`Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. `}</div>
          </div>
          <div className="frame-parent6">
            <div className="frame-parent7">
              <div className="group-container">
                <img className="frame-inner" alt="" src="/group-6.svg" />
                <div className="url-shortening-parent">
                  <div className="custom-urls">URL Shortening</div>
                  <div className="scissor-allows-you">
                    Scissor allows you to shorten URLs of your business, events.
                    Shorten your URL at scale, URL redirects.
                  </div>
                </div>
              </div>
              <div className="group-container">
                <div className="group-wrapper">
                  <img className="frame-inner" alt="" src="/group-61.svg" />
                </div>
                <div className="url-shortening-parent">
                  <div className="custom-urls">Custom URLs</div>
                  <div className="with-scissor-you">
                    With Scissor, you can create custom URLs, with the length
                    you want! A solution for socials and businesses.
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent7">
              <div className="group-container">
                <div className="group-wrapper">
                  <img className="frame-inner" alt="" src="/group-62.svg" />
                </div>
                <div className="url-shortening-parent">
                  <div className="custom-urls">QR Codes</div>
                  <div className="scissor-allows-you">
                    Generate QR codes to your business, events. Bring your
                    audience and customers to your doorstep with this scan and
                    go solution.
                  </div>
                </div>
              </div>
              <div className="group-container">
                <div className="group-wrapper">
                  <img className="frame-inner" alt="" src="/group-63.svg" />
                </div>
                <div className="url-shortening-parent">
                  <div className="custom-urls">Data Analytics</div>
                  <div className="scissor-allows-you">
                    Receive data on the usage of either your shortened URL,
                    custom URLs or generated QR codes. Embedded to monitor
                    progress.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-1">
        <div className="desktop-10-parent">
          <DesktopContainer
            basic="Basic"
            free="Free"
            freePlanForAllUsers="Free plan for all users"
            unlimitedURLShortening="Unlimited URL Shortening"
            basicLinkAnalytics="Basic Link Analytics"
            customizableShortLinks="Customizable Short Links"
            standardSupport="Standard Support"
            adSupported="Ad-supported"
            propLeft="0px"
            propLeft1="87px"
            propColor="#000"
            propColor1="#000"
            propColor2="#000"
          />
          <DesktopContainer
            basic="Teams"
            free="$25/month"
            freePlanForAllUsers="Share with up to 10 users"
            unlimitedURLShortening="Team Collaboration"
            basicLinkAnalytics="User Roles and Permissions"
            customizableShortLinks="Enhanced Security"
            standardSupport="API Access"
            adSupported="Dedicated Account Manager"
            propLeft="709px"
            propLeft1="80px"
            propColor="#141414"
            propColor1="#141414"
            propColor2="#141414"
          />
          <div className="desktop-11">
            <div className="professional">Professional</div>
            <div className="frame-parent12">
              <div className="month-parent">
                <div className="month">$15/month</div>
                <div className="ideal-for-business">
                  Ideal for business creators
                </div>
              </div>
              <div className="frame-parent13">
                <div className="check-circle-parent">
                  <img
                    className="check-circle-icon"
                    alt=""
                    src="/checkcircle1.svg"
                  />
                  <div className="enhanced-link-analytics">
                    Enhanced Link Analytics
                  </div>
                </div>
                <div className="check-circle-parent">
                  <img
                    className="check-circle-icon"
                    alt=""
                    src="/checkcircle1.svg"
                  />
                  <div className="enhanced-link-analytics">
                    Custom Branded Domains
                  </div>
                </div>
                <div className="check-circle-container">
                  <img
                    className="check-circle-icon"
                    alt=""
                    src="/checkcircle1.svg"
                  />
                  <div className="enhanced-link-analytics">
                    Advanced Link Customization
                  </div>
                </div>
                <div className="check-circle-container">
                  <img
                    className="check-circle-icon"
                    alt=""
                    src="/checkcircle1.svg"
                  />
                  <div className="enhanced-link-analytics">
                    Priority Support
                  </div>
                </div>
                <div className="check-circle-container">
                  <img
                    className="check-circle-icon"
                    alt=""
                    src="/checkcircle1.svg"
                  />
                  <div className="enhanced-link-analytics">
                    Ad-free Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-group">
          <div className="button2">
            <div className="sample-cta">Get Custom Pricing</div>
            <div className="magic-wand">
              <img className="magic-wand-icon2" alt="" src="/magic-wand2.svg" />
            </div>
          </div>
          <div className="button3">
            <div className="sample-cta">Select Pricing</div>
            <div className="magic-wand">
              <img className="magic-wand-icon2" alt="" src="/magic-wand3.svg" />
            </div>
          </div>
        </div>
        <div className="vector-container">
          <img className="frame-item" alt="" src="/line-70.svg" />
          <div className="group-parent">
            <div className="month">
              <span>{`A `}</span>
              <span className="url-shortening">price perfect</span>
              <span> for your needs.</span>
            </div>
            <div className="from-catering-for">
              From catering for your personal, business, event, socials needs,
              you can be rest assured we have you in mind in our pricing.
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-111">
        <img className="desktop-11-child" alt="" src="/group-2.svg" />
        <img className="desktop-11-item" alt="" src="/group-31.svg" />
        <div className="frame-parent14">
          <div className="button-container">
            <div className="button4">
              <div className="sample-cta">Trim URL</div>
              <div className="magic-wand4">
                <img
                  className="magic-wand-icon4"
                  alt=""
                  src="/magic-wand4.svg"
                />
              </div>
            </div>
            <div className="by-clicking-trimurl-i-agree-t-wrapper">
              <div className="by-clicking-trimurl-container">
                <span className="by-clicking-trimurl-container1">
                  <span className="by-clicking-trimurl">{`By clicking TrimURL, I agree to the `}</span>
                  <span className="terms-of-service">
                    Terms of Service, Privacy Policy
                  </span>
                  <span>
                    <span className="by-clicking-trimurl">{` `}</span>
                    <span>and Use of Cookies.</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="frame-parent15">
            <div className="frame-wrapper2">
              <div className="paste-url-here-wrapper">
                <div className="paste-url-here">Paste URL here...</div>
              </div>
            </div>
            <div className="drop-down-parent">
              <div className="drop-down">
                <div className="choose-domain">Choose Domain</div>
                <img className="vector-icon1" alt="" src="/vector1.svg" />
              </div>
              <div className="frame-wrapper3">
                <div className="paste-url-here-wrapper">
                  <div className="paste-url-here">Type Alias here</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faqs1">
        <div className="frame-parent16">
          <div className="vector-group">
            <img className="frame-item" alt="" src="/line-701.svg" />
            <div className="why-choose-scissors-container">FAQs</div>
          </div>
          <div className="frame-parent17">
            <div className="frame-parent18">
              <div className="how-does-url-shortening-work-parent">
                <div className="how-does-url">
                  How does URL shortening work?
                </div>
                <img className="minus-icon" alt="" src="/minus.svg" />
              </div>
              <div className="url-shortening-works-container">
                <p className="one-stop">
                  URL shortening works by taking a long URL and creating a
                  shorter, condensed version that redirects to the original URL.
                  When a user clicks on the shortened link, they are redirected
                  to the intended destination.
                </p>
              </div>
              <img className="frame-child4" alt="" src="/vector-4.svg" />
            </div>
            <div className="frame-parent18">
              <div className="how-does-url-shortening-work-parent">
                <div className="how-does-url">
                  Is it necessary to create an account to use the URL shortening
                  service?
                </div>
                <img className="minus-icon" alt="" src="/plus.svg" />
              </div>
              <img className="frame-child4" alt="" src="/vector-4.svg" />
            </div>
            <div className="frame-parent18">
              <div className="how-does-url-shortening-work-parent">
                <div className="are-the-shortened">
                  Are the shortened links permanent? Will they expire?
                </div>
                <img className="minus-icon" alt="" src="/plus.svg" />
              </div>
              <img className="frame-child4" alt="" src="/vector-4.svg" />
            </div>
            <div className="frame-parent18">
              <div className="how-does-url-shortening-work-parent">
                <div className="are-there-any">
                  Are there any limitations on the number of URLs I can shorten?
                </div>
                <img className="minus-icon" alt="" src="/plus1.svg" />
              </div>
              <img className="frame-child4" alt="" src="/vector-4.svg" />
            </div>
            <div className="frame-parent18">
              <div className="how-does-url-shortening-work-parent">
                <div className="can-i-customize">
                  Can I customize the shortened URLs to reflect my brand or
                  content?
                </div>
                <img className="minus-icon" alt="" src="/plus.svg" />
              </div>
              <img className="frame-child4" alt="" src="/vector-4.svg" />
            </div>
            <div className="frame-parent18">
              <div className="how-does-url-shortening-work-parent">
                <div className="can-i-customize">
                  Can I track the performance of my shortened URLs?
                </div>
                <img className="minus-icon" alt="" src="/plus.svg" />
              </div>
              <img className="frame-child4" alt="" src="/vector-4.svg" />
            </div>
            <div className="frame-parent18">
              <div className="how-secure-is-the-url-shorteni-parent">
                <div className="how-secure-is">
                  How secure is the URL shortening service? Are the shortened
                  links protected against spam or malicious activity?
                </div>
                <img className="minus-icon" alt="" src="/plus.svg" />
              </div>
              <img className="frame-child4" alt="" src="/vector-4.svg" />
            </div>
            <div className="frame-parent18">
              <div className="how-does-url-shortening-work-parent">
                <div className="what-is-a">
                  What is a QR code and what can it do?
                </div>
                <img className="minus-icon" alt="" src="/plus1.svg" />
              </div>
              <img className="frame-child4" alt="" src="/vector-4.svg" />
            </div>
            <div className="frame-parent18">
              <div className="how-secure-is-the-url-shorteni-parent">
                <div className="is-there-an">
                  Is there an API available for integrating the URL shortening
                  service into my own applications or websites?
                </div>
                <img className="minus-icon" alt="" src="/plus.svg" />
              </div>
              <img className="frame-child4" alt="" src="/vector-4.svg" />
            </div>
          </div>
        </div>
        <img className="faqs-child" alt="" src="/group-32.svg" />
        <img className="faqs-item" alt="" src="/group-21.svg" />
      </div>
      <div className="rectangle-parent">
        <div className="rectangle-div" />
        <img className="frame-child13" alt="" src="/group-22.svg" />
        <img className="frame-child14" alt="" src="/group-33.svg" />
        <div className="revolutionizing-link-optimizat-parent">
          <div className="revolutionizing-link-optimizat">
            Revolutionizing Link Optimization
          </div>
          <div className="button5">
            <div className="sample-cta">Get Started</div>
            <div className="magic-wand">
              <img className="magic-wand-icon2" alt="" src="/magic-wand5.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="frame-parent27">
          <div className="why-scissor-parent">
            <div className="why-scissor">
              <div className="enhanced-link-analytics">Why Scissor ?</div>
              <div className="p">
                <div className="enhanced-link-analytics">
                  <p className="one-stop">Scissor 101</p>
                  <p className="one-stop">{`Integrations & API`}</p>
                  <p className="one-stop">Pricing</p>
                </div>
              </div>
            </div>
            <div className="why-scissor">
              <div className="enhanced-link-analytics">Resources</div>
              <div className="p">
                <div className="enhanced-link-analytics">
                  <p className="one-stop">Blog</p>
                  <p className="one-stop">Resource Library</p>
                  <p className="one-stop">Developers</p>
                  <p className="one-stop">App Connectors</p>
                  <p className="one-stop">Support</p>
                  <p className="one-stop">Trust Center</p>
                  <p className="one-stop">Browser Extension</p>
                  <p className="one-stop">Mobile App</p>
                </div>
              </div>
            </div>
          </div>
          <div className="solutions-parent">
            <div className="why-scissor">
              <div className="enhanced-link-analytics">Solutions</div>
              <div className="p">
                <div className="enhanced-link-analytics">
                  <p className="one-stop">Social Media</p>
                  <p className="one-stop">Digital Marketing</p>
                  <p className="one-stop">Customer Service</p>
                  <p className="one-stop">For Developers</p>
                </div>
              </div>
            </div>
            <div className="why-scissor">
              <div className="enhanced-link-analytics">Features</div>
              <div className="p3">
                <div className="enhanced-link-analytics">
                  <p className="one-stop">Branded Links</p>
                  <p className="one-stop">Mobile Links</p>
                  <p className="one-stop">Campaign</p>
                  <p className="one-stop">{`Management &`}</p>
                  <p className="one-stop">Analytics</p>
                  <p className="one-stop">QR Code generation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="why-scissor-parent">
            <div className="why-scissor">
              <div className="enhanced-link-analytics">Products</div>
              <div className="p">
                <div className="enhanced-link-analytics">
                  <p className="one-stop">Link Management</p>
                  <p className="one-stop">QR Codes</p>
                  <p className="one-stop">Link-in-bio</p>
                </div>
              </div>
            </div>
            <div className="why-scissor">
              <div className="enhanced-link-analytics">Legal</div>
              <div className="p">
                <div className="enhanced-link-analytics">
                  <p className="one-stop">Privacy Policy</p>
                  <p className="one-stop">Cookie Policy</p>
                  <p className="one-stop">Terms of Service</p>
                  <p className="one-stop">Acceptable Use Policy</p>
                  <p className="one-stop">Code of Conduct</p>
                </div>
              </div>
            </div>
          </div>
          <div className="why-scissor">
            <div className="company1">Company</div>
            <div className="p">
              <div className="enhanced-link-analytics">
                <p className="one-stop">About Scissor</p>
                <p className="one-stop">Careers</p>
                <p className="one-stop">Partners</p>
                <p className="one-stop">Press</p>
                <p className="one-stop">Contact</p>
                <p className="one-stop">Reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-parent">
          <div className="logo">
            <img className="vector-icon" alt="" src="/vector2.svg" />
            <img className="logo-child" alt="" src="/vector-22.svg" />
            <div className="scissor">SCISSOR</div>
          </div>
          <div className="socials">
            <img className="minus-icon" alt="" src="/ifisocialtwitter.svg" />
            <img className="minus-icon" alt="" src="/svgfeather.svg" />
            <img className="minus-icon" alt="" src="/ifisociallinkedin.svg" />
            <img className="minus-icon" alt="" src="/ifisocialfacebook.svg" />
          </div>
        </div>
        <img className="footer-child" alt="" src="/group-23.svg" />
        <img className="footer-item" alt="" src="/group-34.svg" />
        <div className="term-of-service-parent">
          <div className="term-of-service">Term of Service</div>
          <img className="frame-child15" alt="" src="/vector-5.svg" />
          <div className="term-of-service">Security</div>
          <img className="frame-child15" alt="" src="/vector-5.svg" />
          <div className="term-of-service">ⓒ Scissor 2023</div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedDesign;
