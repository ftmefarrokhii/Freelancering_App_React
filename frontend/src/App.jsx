import './App.css'
import {Navigate, Route,Routes} from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import {QueryClient, QueryClientProvider} from 'react-query'
import { Toaster } from 'react-hot-toast'
import CompleteProfile from './features/authentication/CompleteProfile'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import OwnerDashboard from './pages/OwnerDashboard'
import Project from './pages/Project'
import Projects from './pages/Projects'
import ThemeProvider from './context/ThemeContext'
import OwnerLayout from './features/owner/OwnerLayout'
import FreelancerLayout from './features/freelancer/FreelancerLayout'
import SubmittedProjects from './pages/SubmittedProjects'
import Proposals from './pages/Proposals'
import FreelancerDashboard from './pages/FreelancerDashboard'
import ProtectedRoute from './ui/ProtectedRoute'
import AdminLayout from './features/admin/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'
import Users from './features/admin/Users'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
function App() {
  const queryClient = new QueryClient()
  return(
    <ThemeProvider>

      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false}/> */}
        <Toaster />
          <Routes>
            <Route path='/auth' element={<AuthPage />}/>
            <Route path='/complete-profile' element={<CompleteProfile />}/>

            <Route path='/owner' element={<ProtectedRoute><OwnerLayout /></ProtectedRoute>}>
              <Route index element={<Navigate to={"dashboard"} replace />} />
              <Route path='dashboard' element={<OwnerDashboard />}/>
              <Route path='projects' element={<Projects />}/>
              <Route path='projects/:id' element={<Project />}/>
            </Route>

            <Route path='/freelancer' element={<ProtectedRoute><FreelancerLayout /></ProtectedRoute>}>
              <Route index element={<Navigate to={"dashboard"} replace />} />
              <Route path='dashboard' element={<FreelancerDashboard />}/>
              <Route path='projects' element={<SubmittedProjects />}/>
              <Route path='proposals' element={<Proposals />}/>
            </Route>
            <Route path='/admin' element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
              <Route index element={<Navigate to={"dashboard"} replace />} />
              <Route path='dashboard' element={<AdminDashboard />}/>
              <Route path='users' element={<Users />}/>
              <Route path='proposals' element={<Proposals />}/>
              <Route path='projects' element={<SubmittedProjects />}/>
            </Route>

            <Route path='/' element={<Home />}/>
            <Route path='/*' element={<NotFound />}/>
          </Routes>
      </QueryClientProvider>
    </ThemeProvider>
  )


}

export default App
