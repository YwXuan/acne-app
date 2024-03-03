// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import "./SubFrame.css";

// const SubFrame = () => {
//   const navigate = useNavigate();

//   const onGroupContainerClick = useCallback(() => {
//     navigate("/consolpage");
//   }, [navigate]);

//   const onTeacherImageClick = useCallback(() => {
//     navigate("/homepage");
//   }, [navigate]);

//   return (
//     <div className="sub-frame">
//       <div className="inner-frame1">
//         <div className="border-frame">
//             <img
//               src="https://png.pngtree.com/element_pic/25/03/20/1656f4ec521f3ee.jpg"
//               alt="example"
//               className="group-div"
//               onClick={onGroupContainerClick}
//             />
//           </div>
//         <div className="wrapper-detect1">
//           <img
//             className="detect-icon2"
//             loading="eager"
//             alt=""
//             src="/detect1@2x.png"
//           />
//         </div>
//       </div>
//       <img
//         className="teacher-icon5"
//         loading="eager"
//         alt=""
//         src="/teacher1@2x.png"
//         onClick={onTeacherImageClick}
//       />
//     </div>
//   );
// };

// export default SubFrame;


import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SubFrame.css";

const SubFrame = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/consolpage");
  }, [navigate]);

  const onTeacherImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  // Sample data for the radio group
  const radioGroupData = [
    { id: "levle0", label: "levle0", value: "/consolpage" },
    { id: "levle1", label: "levle1", value: "/consolpage" },
    { id: "levle2", label: "2", value: "/consolpage" },
    { id: "levle0", label: "3", value: "/consolpage" },
    { id: "levle1", label: "4", value: "/consolpage" },
    { id: "levle2", label: "5", value: "/consolpage" },
    { id: "levle0", label: "6", value: "/consolpage" },
    { id: "levle1", label: "7", value: "/consolpage" },
    { id: "levle2", label: "5", value: "/consolpage" },
  ];

  return (
    <div className="sub-frame">
      <div className="inner-frame1">
        <div className="border-frame">    
          <div className="background-container"></div>
          {radioGroupData.map((item) => (
            <div key={item.id} className="radio-item">
              <input
                type="radio"
                id={item.id}
                className="radio"
                name="groupSelection"
                value={item.value}
                onClick={onGroupContainerClick}
              />
              <label htmlFor={item.id}>
                <img
                  src={`/detectpic/${item.id}.jpg`} // Replace with actual image URL
                  alt={item.label}
                  className="group-div"
                />
              </label>            
            </div>
          ))}
        </div>
        <div className="wrapper-detect1">
          <img
            className="detect-icon2"
            loading="eager"
            alt=""
            src="/detect1@2x.png"
          />
        </div>
      </div>
      <div className="teacher-icon5" onClick={onTeacherImageClick}>
      <img
        className="teacher-icon5"
        loading="eager"
        alt=""
        src="/teacher1@2x.png"
        onClick={onTeacherImageClick}
      />
      </div>
    </div>
  );
};

export default SubFrame;
