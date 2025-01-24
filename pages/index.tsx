
import {
  Heading,
  AbsoluteCenter,
} from "@chakra-ui/react"
import{
  useState
} from "react"
const useClock = ()=>{
  const[second,setsec] = useState<number>();
  const[minute,setmin] = useState<number>();
  const[hour,sethour] = useState<number>();
  setTimeout(()=>{
    const date=new Date();
    setsec(date.getSeconds());
    setmin(date.getMinutes());
    sethour(date.getHours());
  },1000)
  return{second,minute,hour};
}
export default function Page() {
let hours;
let minutes;
let seconds;
const {second,minute,hour}=useClock();
if(second===undefined||minute===undefined||hour===undefined){
  return(
  <> </>
  )
}
if(hour<10)
  hours='0'+hour;
else
  hours=''+hour;
if(minute<10)
   minutes='0'+minute;
else
   minutes=''+minute;
if(second<10)
   seconds='0'+second;
else
   seconds=''+second;
return (
    <>
      <Heading size="6xl"><AbsoluteCenter>{hours} : {minutes} : {seconds}</AbsoluteCenter></Heading>
    </>
  )
}
