import { useCallback } from "react";
import InnerFrame from "../components/InnerFrame";
import {  Popover } from 'antd';
import { useNavigate,useParams  } from "react-router-dom";
import "./SchoolQuiz.css";

const SchoolQuiz = () => {
  const navigate = useNavigate();
  const ans = "我是答案"
  const topic = useParams();
  const onGroupContainerClick = useCallback(() => {
    navigate("/schoolpage");
  }, [navigate]);

  const onTeacherImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="schoolquiz">
      <img className="bkground-icon6" alt="" src="/bkground@2x.png" />
      <InnerFrame prop="仔細想想看" />
      <div className="frame-div">
        <div className="bk-frame-parent">
          <div className="bk-frame">
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="frame-wrapper">
                <div className="frame-parent1">
                  <div className="wrapper">
                    <div className="div12">{topic.topic}</div>
                  </div>
                  <div className="div13">
                    題目？
                  </div>
                </div>
              </div>
              <div className="frame-parent2">
                <div className="parent" onClick={onGroupContainerClick}>
                  <div className="div14">其他影片</div>
                  <div className="back" />
                </div>
                <div className="group">
                  <Popover className="group" content={ans} overlayStyle={{fontSize:30}} placement="bottom" >
                    <div className="div15">答案</div>
                    <div className="quiz" />
                  </Popover>
                  
                  
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-stu">
            <img
              className="stu-icon1"
              loading="eager"
              alt=""
              src="/stu1@2x.png"
            />
          </div>
        </div>
        <img
          className="teacher-icon3"
          loading="eager"
          alt=""
          src="/teacher1@2x.png"
          onClick={onTeacherImageClick}
        />
      </div>
    </div>
  );
};

export default SchoolQuiz;
