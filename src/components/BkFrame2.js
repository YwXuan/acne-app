import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BkFrame2.css";

const BkFrame2 = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/detectpage");
  }, [navigate]);

  return (
    <div className="bk-frame1">
      <div className="border-frame1">
        <div className="border-frame-child" />
        <div className="rectangle-parent1">
          <div className="frame-child1" />
          <div className="div32">圖片</div>
        </div>
        <div className="div33">
          文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
        </div>
        <div className="button-wrapper">
          <div className="button" onClick={onButtonContainerClick}>
            <div className="back1" />
            <div className="div34">重新選擇</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BkFrame2;
