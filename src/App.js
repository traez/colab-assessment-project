import {
  createHashRouter,
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'
import RootLayout from './RootLayout'
import SectionHome from './SectionHome'
import SectionApi from './SectionApi'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<SectionHome />} />
      <Route path="api" element={<SectionApi />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

