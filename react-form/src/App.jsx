import Form from './components/Form/Form'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();
import './App.css'
import DisplayUsers from './components/DisplayUsers/DisplayUsers';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <Form />
    <DisplayUsers />
    </QueryClientProvider>
  )
}

export default App;