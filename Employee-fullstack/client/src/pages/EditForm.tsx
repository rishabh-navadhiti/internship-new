import { useParams } from "react-router-dom"
import EmployeeForm from "./EmployeeForm";


export default function EditForm() {
  const { id } = useParams();
  return (
    <EmployeeForm id={id}/>
  )
}