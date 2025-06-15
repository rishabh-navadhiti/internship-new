import { useQuery } from '@tanstack/react-query';
import axios from 'axios'

const EmployeeTable = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['employees'],
        queryFn: () => axios.get('http://localhost:3000/employees').then(res => res.data)
    });

    if (isLoading) console.log('Data loading');
    if (error) console.log('Error loadng data');
    console.log(data);

    return (
        <h1>Employee Tabe </h1>
    )
}

export default EmployeeTable;