import { useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate();  
    return (
    <div className="bg-dark p-4">
       <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
            alt="NETFLIX" style={{width:"120px",cursor:'pointer'}}
            onClick={()=>navigate('/')}/>
    </div>
  )
}
