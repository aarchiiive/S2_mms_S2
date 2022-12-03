import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import t1 from "../../templates/template1.jpg";
import t2 from "../../templates/template2.jpg";
import t3 from "../../templates/template3.jpg";
import t4 from "../../templates/template4.jpg";

const ViewTemplates = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const position = [
    "object-left-top",
    "object-right-top",
    "object-left-bottom",
    "object-right-bottom"
  ]
  const handleAddUser = () => {
    navigate("/order");
  };

  function RenderTemplate() {
    const images = [t1, t2, t3, t4];
  
    return (
      images.map((img, i) => {
        return (
          <div class="flex scale-75 justify-center">
            <img 
            // class="group-hover:opacity-75"
            src={img} 
            onClick={e => {
              // e.preventDefault();
              console.log("template", i, "selected");
            }}
            alt="card template"/>
          </div>
        )
      })
    )
  }

  return (
    <div>
      <div className="h-screen justify-center grid gap-10 md:grid-cols-2">
        <RenderTemplate></RenderTemplate>
      </div>
      <div className = "flex justify-around">
        <Button onClick={() => navigate("/add-user")}>이전</Button>
        <Button onClick={handleAddUser}>다음</Button>
      </div>
    </div>
  )
}

export default ViewTemplates;