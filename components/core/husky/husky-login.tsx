import { useHuskyAnalytics } from "@/analytics/husky.analytics";

// This component renders a login popup for the Husky application.
// It tracks user login actions and provides options to dismiss or log in.

interface HuskyLoginProps {
  onLoginBoxClose: () => void;
  onLoginClick: () => void;
}

function HuskyLogin({ onLoginBoxClose, onLoginClick }: HuskyLoginProps) {
  const { trackHuskyLogin } = useHuskyAnalytics();

  // Handles the login button click event
  const onLoginBtnClicked = () => {
    trackHuskyLogin(); // Track the login action
    if (onLoginClick) {
      onLoginClick(); // Call the onLoginClick callback if provided
    }
  };

  return (
    <>
      <div className="login-popup">
        <div className="login-popup__box">
          <h3 className="login-popup__box__title">Login to continue using Husky</h3>
          <p className="login-popup__box__desc">
            Husky is purpose built to improve your speed & quality of learning about the Protocol Labs innovation network. Login or Join us to become part of this growing network
          </p>
          <div className="login-popup__box__actions">
            <div className="login-popup__box__actions__left">
              <button 
                type="button" 
                onClick={onLoginBoxClose} 
                className="login-popup__box__actions__left__dismiss" 
                data-testid="dismiss-button"
              >
                Dismiss
              </button>
            </div>
            <div className="login-popup__box__actions__right">
              <button 
                onClick={onLoginBtnClicked} 
                className="login-popup__box__actions__right__login" 
                data-testid="login-button"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {

            `
             .login-popup {
            width: 100%;
            height: 100%;
            position: absolute;
            background: #b0bde099;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
          }
          .login-popup__box {
            background: white;

            width: 90%;
            border-radius: 12px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .login-popup__box__title {
            color: #0f172a;
            font-size: 24px;
            font-weight: 700;
          }
          .login-popup__box__desc {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
          }
          .login-popup__box__actions {
            display: flex;
            justify-content: space-between;
            flex-direction: column-reverse;
            gap: 8px;
          }
          .login-popup__box__actions__left__dismiss {
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            padding: 10px 24px;
            background: white;
            font-size: 14px;
            font-weight: 500;
            width: 100%;
          }
          .login-popup__box__actions__right {
            display: flex;
            gap: 8px;
            flex-direction: column;
          }
          .login-popup__box__actions__right__join {
            border-radius: 8px;
            padding: 10px 24px;
            background: #156ff7;
            color: white;
            font-size: 14px;
            font-weight: 500;
            width: 100%;
            display: flex;
            align-items: center;
            gap: 8px;
            justify-content: center;
          }

          .login-popup__box__actions__right__join__pane {
            width: 100%;
            padding: 5px;
          }

          .login-popup__box__actions__right__join__pane__item {
            padding: 5px 15px;
            font-size: 14px;
            background: transparent;
            width: 100%;
            text-align: left;
          }

          .login-popup__box__actions__right__join__pane__item:hover {
            background-color: #f1f5f9;
            border-radius: 4px;
            transition: all 0.2s ease;
          }

          .login-popup__box__actions__right__login {
            border-radius: 8px;
            padding: 10px 24px;
            background: #156ff7;
            color: white;
            font-size: 14px;
            font-weight: 500;
          }
             @media (min-width: 1024px) {
            .login-popup__box__actions {
              display: flex;
              justify-content: space-between;
              flex-direction: row;
              gap: unset;
            }

            .login-popup__box__actions__left__dismiss {
              width: unset;
            }

            .login-popup__box__actions__right {
              flex-direction: row;
            }

            .login-popup__box__actions__right__join {
              width: unset;
            }
          }
            
            `
        }
      </style>
    </>
  );
}

export default HuskyLogin;