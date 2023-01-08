import React,{useState,useEffect} from 'react'
import { Text, IconButton } from '@chakra-ui/react'
import { ArrowLeftIcon,ArrowRightIcon } from '@chakra-ui/icons'
import axios from 'axios'
import Profile from './Profile'

export default function Main() {

    let [data,updateData] = useState([])
    let [list,updateList] = useState(0);
    
    useEffect(()=>{
        const api_call_func1 = async () => {
                let url = "https://api.github.com/users?per_page=12&since="+list;
                console.log(url);
                let res = await axios.get(url);
                console.log(res.data);
                updateData(res.data);
        }
        api_call_func1()
    },[list])

  return (
    <div style={{background:"grey",paddingBottom:"1rem"}}>
        <div style={{display:"flex",justifyContent:"center"}}>
            <Text fontSize='5xl' >GITHUB PROFILES</Text>
        </div>
        <div style={{width:'100vw',heigth:'100vh', display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',gap:'1rem'}}>
            { data.map((item,idx)=><Profile key={idx} url={item.avatar_url} name={item.login} link={item.html_url} />)}
        </div>
        <div style={{display:"flex",justifyContent:"center",gap:"1rem",marginTop:"1rem", marginBottom:"1rem"}}>
        <IconButton   
            variant='outline'
            colorScheme='black'
            aria-label='Call Sage'
            fontSize='20px'
            icon={<ArrowLeftIcon/>}
            onClick={()=>updateList(list-46)}
        />
        <IconButton 
            variant='outline'
            colorScheme='black'
            aria-label='Call Sage'
            fontSize='20px'
            icon={<ArrowRightIcon />}     
            onClick={()=>updateList(list+46)}   
        />  
        </div>
    </div>
  )
}
