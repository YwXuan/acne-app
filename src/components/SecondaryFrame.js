import { useCallback } from "react";
import { useNavigate,useParams  } from "react-router-dom";
import "./SecondaryFrame.css";

const SecondaryFrame = () => {
  const topic = useParams();
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/schoolpage");
  }, [navigate]);

  const onGroupContainer1Click = useCallback((id) => {
    navigate(`/schoolquiz/${id}`);
  }, [navigate]);

  const onTeacherImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="secondary-frame1">
      <div className="tertiary-frame">
        <div className="quiz-background">
          <div className="back-button-frame">
            <div>
              <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                frameborder='0'
                className="videoframe"
                />
              </div>
            <div className="back-button-frame-child" />
            <div className="page-navigation-group">
              <div className="container" onClick={onGroupContainerClick}>
                <div className="div36">回上頁{}</div>
                <div className="back3" />
              </div>              
              <div className="parent1" onClick={() =>onGroupContainer1Click(topic.topic)}>
                <div className="div37">小測驗</div>
                <div className="quiz1" />
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-stu2">
          <img
            className="stu-icon3"
            loading="eager"
            alt=""
            src="/stu1@2x.png"
          />
        </div>
      </div>
      <img
        className="teacher-icon6"
        loading="eager"
        alt=" "
        src="/teacher1@2x.png"
        onClick={onTeacherImageClick}
      />
    </div>
  );
};

export default SecondaryFrame;


{/* <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
frameborder='0'
allow='autoplay; encrypted-media'
allowfullscreen
title='video'
/> */}