import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
// chakra ui
import {
    Button,
    Field,
    Fieldset,
    Input,
    NativeSelect,
    NumberInput,
    Stack,
  } from "@chakra-ui/react";
  import { useForm, Controller } from "react-hook-form";
  

const EmployeeForm = () => {
    const { register, handleSubmit, reset, control, formState: {errors}}  = useForm();
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (newData) => axios.post('http://localhost:3000/employees', newData).then(res => res.data),
        onSuccess: () => {
            reset();
            queryClient.invalidateQueries({queryKey: ['employees']});            
        }
    });

    const onSubmit = (data) => {
        console.log("*****!!!!!!!!"+ data.name);
        
        mutation.mutate(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Fieldset.Root size="md" maxW="md" gap="6">
          <Stack>
            <Fieldset.Legend>Employee Info</Fieldset.Legend>
            <Fieldset.HelperText>Enter your details below</Fieldset.HelperText>
          </Stack>
  
          <Fieldset.Content gap="5">
            {/* Name */}
            <Field.Root invalid={!!errors.name}>
              <Field.Label>Name</Field.Label>
              <Input
                placeholder="John Doe"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <Field.ErrorText>{errors.name.message}</Field.ErrorText>}
            </Field.Root>
  
            {/* Email */}
            <Field.Root invalid={!!errors.email}>
              <Field.Label>Email</Field.Label>
              <Input
                type="email"
                placeholder="john@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && <Field.ErrorText>{errors.email.message}</Field.ErrorText>}
            </Field.Root>
  
            {/* Age - Chakra v3 NumberInput with RHF Controller */}
            <Field.Root invalid={!!errors.age}>
              <Field.Label>Age</Field.Label>
              <Controller
                control={control}
                name="age"
                rules={{
                  required: "Age is required",
                  min: { value: 18, message: "Minimum age is 18" },
                }}
                render={({ field }) => (
                  <NumberInput.Root
                    value={field.value?.toString() ?? ""}
                    onValueChange={({ valueAsNumber }) => field.onChange(valueAsNumber)}
                    step={1}
                    min={0}
                  >
                    <NumberInput.Control />
                    <NumberInput.Input placeholder="Enter age" />
                  </NumberInput.Root>
                )}
              />
              {errors.age && <Field.ErrorText>{errors.age.message}</Field.ErrorText>}
            </Field.Root>
  
            {/* Role - NativeSelect */}
            <Field.Root invalid={!!errors.role}>
              <Field.Label>Role</Field.Label>
              <NativeSelect.Root>
                <NativeSelect.Field
                  {...register("role", { required: "Role is required" })}
                >
                  <option value="">Select role</option>
                  <option value="Admin">Admin</option>
                  <option value="Developer">Developer</option>
                  <option value="Manager">Manager</option>
                </NativeSelect.Field>
                <NativeSelect.Indicator />
              </NativeSelect.Root>
              {errors.role && <Field.ErrorText>{errors.role.message}</Field.ErrorText>}
            </Field.Root>
          </Fieldset.Content>
  
          <Button type="submit" colorScheme="purple" alignSelf="flex-start">
            Submit
          </Button>
        </Fieldset.Root>
      </form>

    )
}

export default EmployeeForm;






