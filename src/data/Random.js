function RandomNumber(props){
     
    return(
        <div style= {{borderStyle: 'solid'}}>
        <span>Radom value between {props.min} and {props.max} {'=>'}{Math.floor(Math.random() * props.max) + props.min}</span>
       
        </div>
    )
}

export default RandomNumber