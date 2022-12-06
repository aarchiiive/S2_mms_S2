import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { addTemplate } from "./userSlice";
import t1 from "../../templates/template1.jpg";
import t2 from "../../templates/template2.jpg";
import t3 from "../../templates/business.jpg";
// import t4 from "../../templates/template4.jpg";
import t4 from "../../templates/paper.jpg";

const ViewTemplates = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [template, setTemplate] = useState();
  const [templateName, setTemplateName] = useState();
  const [selected, setSelected] = useState(false);
  let templateSelected = false;
  const position = [
    "object-left-top",
    "object-right-top",
    "object-left-bottom",
    "object-right-bottom"
  ]
  const colors = [
    "옐로우",
    "블루",
    "비즈니스",
    "종이질감"
  ]
  const handleViewTemplates = () => {
    if (selected) {
      console.log(template);
      dispatch(addTemplate({id : params.id, template : template, templateName : templateName}));
      navigate("/confirm/"+ params.id);
    }
    else
      alert("템플릿이 선택되지 않았습니다.");
  };

  function RenderTemplate() {
    const images = [t1, t2, t3, t4];
  
    return (
      images.map((img, i) => {
        return (
          <div class="bg-white-500 opacity-100 scale-75 hover:opacity-70 rounded-md">
            <img 
            // class="group-hover:opacity-75"
            src={img} 
            onClick={e => {
              // e.preventDefault();
              const k = i + 1;
              const imgName = "t" + k;
              console.log("template", i, "selected");
              alert(colors[i] + " 템플릿이 선택되었습니다.");
              setSelected(true);
              console.log(imgName);
              setTemplate(img);
              setTemplateName(imgName);
            }}
            className="flex scale-100 w-[360px] h-[200px] object-center"
            alt="card template"/>
          </div>
        )
      })
    )
  }

  return (
    <div className="h-screen">
      <div class="box-border backdrop-contrast-125 h-[580px] w-[1000px] m-auto p-4 border-2 rounded-md">
        <div className="w-3/5 m-auto grid gap-10 md:grid-cols-2">
          <RenderTemplate></RenderTemplate>
        </div>
        <div className = "px-60 justify-between flex">
          <Button onClick={() => navigate("/add-user")}>이전</Button>
          <Button onClick={handleViewTemplates}>다음</Button>
        </div>
      </div>
    </div>
  )
}

export default ViewTemplates;