import { useCallback } from "react";
import InnerFrame from "../components/InnerFrame";
import BkFrame2 from "../components/BkFrame2";
import { useNavigate } from "react-router-dom";
import "./ConsolPage.css";

const ConsolPage = () => {
  const navigate = useNavigate();

  const onTeacherImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="consolpage">
      <img className="bkground-icon3" alt="" src="/bkground@2x.png" />
      <InnerFrame prop="皮膚辨識" />
      <div className="text-container-parent">
        <div className="text-container">
          <BkFrame2 />
          <div className="wrapper-detect">
            <img
              className="detect-icon1"
              loading="eager"
              alt=""
              src="/detect1@2x.png"
            />
          </div>
        </div>
        <img
          className="teacher-icon1"
          loading="eager"
          alt=""
          src="/teacher1@2x.png"
          onClick={onTeacherImageClick}
        />
      </div>
    </div>
  );
};

export default ConsolPage;
