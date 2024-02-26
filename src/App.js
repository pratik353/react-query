import './App.css';
import TodosList from './features/todos/TodosList';
import UsersList from './features/axe-throw/UsersList.jsx';

// _app.tsx or index.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactQueryExample from './components/Github';

// create instance of react query client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}> {/* provide query client to overAll project */}
    <div className="App">
      {/* <TodosList /> */}
      <ReactQueryExample />
      {/* <UsersList /> */}
    </div>
    </QueryClientProvider>
  );
}

export default App;


