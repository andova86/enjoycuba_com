

const Cat_svg = (props) => {



  return (
     <object data={props.url} type="image/svg+xml"
    id={props.id} width={props.w} height={props.h} className='svg'/>
  )
}

export default Cat_svg;