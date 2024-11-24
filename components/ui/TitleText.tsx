
interface TitleTextProps{
    text: string,
    color: string,
    class: string,
}


const TitleText: React.FC<TitleTextProps> = ({text,color,class}) => { 
  return (
    <h1 className={` ${color} ${class} `}>
      {text}
    </h1>
  )
}

