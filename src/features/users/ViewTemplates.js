import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { addTemplate } from "./userSlice";
import t1 from "../../templates/template1.jpg";
import t2 from "../../templates/template2.jpg";
import t3 from "../../templates/template3.jpg";
import t4 from "../../templates/template4.jpg";

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
    "그린",
    "레드"
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
          <div class="bg-white-500 opacity-100 scale-75 hover:opacity-70">
            <img 
            // class="group-hover:opacity-75"
            src={img} 
            onClick={e => {
              // e.preventDefault();
              const k = i + 1;
              const imgName = "t" + k;
              console.log("template", i, "selected");
              alert(colors[i] + "가(이) 선택되었습니다.");
              setSelected(true);
              console.log(imgName);
              setTemplate(img);
              setTemplateName(imgName);
            }}
            class="flex scale-100 w-90 h-50 object-center"
            alt="card template"/>
          </div>
        )
      })
    )
  }

  return (
    <div className="h-screen">
      <div className="w-3/5 m-auto grid gap-10 md:grid-cols-2">
        <RenderTemplate></RenderTemplate>
      </div>
      <div className = "flex justify-around">
        <Button onClick={() => navigate("/add-user")}>이전</Button>
        <Button onClick={handleViewTemplates}>다음</Button>
      </div>
    </div>
  )
}

export default ViewTemplates;