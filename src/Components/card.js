import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Card = () => {
    const cardStyle = {
        maxWidth: '50rem',
      };
      const [data,setData]=useState([])
      function getData(){
          axios.get("http://13.235.142.31:8000/jobviewapi/")
          .then((res) => {
              console.log(res.data);
              setData(res.data);
  
          });
      }
      useEffect(() => {
        getData();

    },[]);
    const history = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click");
        history("/query");
         
        };
    return(
        <>

{
    data.map((eachData) => {
        return(
            <>
<div className="card border-dark mb-3" id="card" style={cardStyle}  >
    
  <div className="card-header">{eachData.status}</div>
  <div className="card-body text-dark">
    <h5 className="card-title">{eachData.post}</h5>
    <table className="table table-borderless">
  <thead>
    <tr>
      <th scope="col">Location</th>
      <th scope="col">Duration</th>
      <th scope="col">Stipend</th>
      <th scope="col">Openings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{eachData.location}</td>
      <td>{eachData.duration}</td>
      <td>{eachData.stipend}</td>
      <td>{eachData.opening}</td>
    </tr>
 

  </tbody>
</table>
<table className="table table-borderless">
  <thead>
    <tr>
      <th scope="col">Skill Required</th>
</tr>
  </thead>
  <tbody>
    <tr>
    <td>{eachData.desc}</td>
 </tr>
</tbody>
</table>
<table className="table table-borderless">
  <thead>
    <tr>
      <th scope="col">Who Can Apply</th>
</tr>
  </thead>
  <tbody>
    <tr>
    <td>{eachData.criteria}</td>
 </tr>
</tbody>
</table>
<button type="button" class="btn btn-primary" onClick={handleSubmit}>Apply Now</button>


    
  </div>
</div>
</>
        )

    })
}


        </>
        )
    }
    export default Card
