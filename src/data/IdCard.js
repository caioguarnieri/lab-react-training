import React from "react"
function IdCard (props) {
 return (
 <div> 
 <img src={props.img}/>
 <p>{props.lastName}</p>
 <p>{props.firstName}</p>
 <p>{props.gender}</p>
 <p>{props.height}</p>
 <p>{props.birth.toLocaleString()}</p>
 <p>{props.picture}</p>
 </div>
 )
}
export default IdCard