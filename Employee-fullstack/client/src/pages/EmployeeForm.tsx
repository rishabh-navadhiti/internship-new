import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const EmployeeForm = () => {
    const { register, handleSubmit, reset, formState: {errors}}  = useForm();
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (newData) => axios.post('http://localhost:3000/employees', newData).then(res => res.data),
        onSuccess: () => {
            reset();
            queryClient.invalidateQueries({queryKey: ['employees']});            
        }
    });

    const onSubmit = (data) => {
        mutation.mutate(data);
    }

    return (
        <div>
            <h1>Test</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            </form>
        </div>
    )
}

export default EmployeeForm;