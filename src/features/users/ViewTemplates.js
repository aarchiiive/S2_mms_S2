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
  const handleViewTemplates = () => {
    if (selected) {
      console.log(template);
      dispatch(addTemplate({id : params.id, template : template, templateName : templateName}));
      navigate("/order/" + params.id);
    }
    else
      alert("템플릿이 선택되지 않았습니다.");
  };

  function RenderTemplate() {
    const images = [t1, t2, t3, t4];
  
    return (
      images.map((img, i) => {
        return (
          <div>
            <img 
            // class="group-hover:opacity-75"
            src={img} 
            onClick={e => {
              // e.preventDefault();
              const k = i + 1;
              const imgName = "t" + k;
              console.log("template", i, "selected");
              alert("템플릿 " + k + "가 선택되었습니다.");
              setSelected(true);
              console.log(imgName);
              setTemplate(img);
              setTemplateName(imgName);
            }}
            class="flex scale-75 w-90 h-50 object-center "
            alt="card template"/>
          </div>
        )
      })
    )
  }

  return (
    <div>
      <div className="h-screen justify-around grid md:grid-cols-2">
        <RenderTemplate></RenderTemplate>
      </div>
      <div className = "flex justify-around">
        <Link to={`/add-user`}>
          <Button>이전</Button>
        </Link>
        <Button onClick={handleViewTemplates}>다음</Button>
      </div>
    </div>
  )
}

export default ViewTemplates;