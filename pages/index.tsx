import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  createListCollection,
  Box,
} from "@chakra-ui/react"
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
const Choose = () =>{
  const [clock,setClock]=useState<any>()
  return(
    <>
          <SelectRoot key={"md"} size={"md"} collection={Frameworks} onValueChange={(event)=>{setClock(event.value[0])}}>

            <SelectLabel>CLOCK TYPE???????</SelectLabel>
            <SelectTrigger>
              <SelectValueText placeholder="Select type of clock" />
            </SelectTrigger>
            <SelectContent>
              {Frameworks.items.map((movie) => (
                <SelectItem item={movie} key={movie.value}>
                  {movie.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
          {clock=="analog"&&<AnalogClock/>}
          {clock=="digital"&&<Digit/>}
    </>
  )
}
const Frameworks = createListCollection({
  items: [
    { label: "ANALOG", value: "analog" },
    { label: "DIGITAL", value: "digital" },
  ],
})
export default function Page(){
  return(
    <>
     <Choose></Choose>
    </>
  )
}
const Digit=() => {
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
const AnalogClock=()=>{
  return(<>
    <AbsoluteCenter>
     <Box
     width={"500px"}
     height={"500px"}
     bgColor={"white"}
     borderRadius={"250px"}
     >
     </Box>
    </AbsoluteCenter>
    <AbsoluteCenter>
    <Box
     width={"16px"}
     height={"16px"}
     bgColor={"black"}
     borderRadius={"8px"}
     ></Box>
    </AbsoluteCenter>
  
  </>)
}
