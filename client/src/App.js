import Home from "./pages/Home";
import Data from "./pages/Data";
import More from "./pages/More";
import Error from "./pages/Error";
import Login from './pages/Login';
import About from './pages/About';
import Tests from "./pages/Tests";
import Logout from './pages/Logout';
import Emails from "./pages/Emails";
import Company from "./pages/Company";
import Contact from './pages/Contact';
import AddTest from "./pages/AddTest";
import Process from "./pages/Process";
import AddEmail from './pages/AddEmail';
import Messages from "./pages/Messages";
import EditTest from "./pages/EditTest";
import Loader from './components/Loader';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import EditEmail from "./pages/EditEmail";
import Dashboard from './pages/Dashboard';
import AddCompany from './pages/AddCompany';
import EditCompany from "./pages/EditCompany";
import Testimonials from "./pages/Testimonials";
import TestRequests from "./pages/TestRequests";
import Presentations from "./pages/Presentations";
import CompanyPolicy from './pages/CompanyPolicy';
import StudentPolicy from './pages/StudentPolicy';
import AddTestimonial from "./pages/AddTestimonial";
import AddPresentation from "./pages/AddPresentation";
import EditTestimonial from "./pages/EditTestimonial";
import EditPresentation from "./pages/EditPresentation";
import DashboardRequests from "./pages/DashboardRequests";
import { initialState, reducer } from './reducer/UseReducer';
import TestimonialRequests from "./pages/TestimonialRequests";
import PresentationRequests from "./pages/PresentationRequests";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect, createContext, useReducer } from "react";

/* Setting usercontext used in authentication */
export const UserContext = createContext();

/* Main App component */
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  /* Loading before the App is loaded */
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  /* Returning the Components with routes assigned */
  return (
    <>
      {isLoading ? <Loader /> : (
        <div style={{ height: "100vh" }}>
          <BrowserRouter>
            <UserContext.Provider value={{ state, dispatch }}>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/data' element={<Data />} />
                <Route path='/addCompany' element={<AddCompany />} />
                <Route path='/testimonial/addTestimonial' element={<AddTestimonial />} />
                <Route path='/test/addTest' element={<AddTest />} />
                <Route path='/presentation/addPresentation' element={<AddPresentation />} />
                <Route path='/testimonial/testimonials' element={<Testimonials />} />
                <Route path='/test/tests' element={<Tests />} />
                <Route path='/presentation/presentations' element={<Presentations />} />
                <Route path='/email/addEmail' element={<AddEmail />} />
                <Route path='/companyEdit/:id' element={<EditCompany />} />
                <Route path='/emailEdit/:id' element={<EditEmail />} />
                <Route path='/testEdit/:id' element={<EditTest />} />
                <Route path='/presentationEdit/:id' element={<EditPresentation />} />
                <Route path='/testimonialEdit/:id' element={<EditTestimonial />} />
                <Route path='/companies' element={<Dashboard />} />
                <Route path='/email/emails' element={<Emails />} />
                <Route path='/companyPolicy' element={<CompanyPolicy />} />
                <Route path='/studentPolicy' element={<StudentPolicy />} />
                <Route path='/placementProcess' element={<Process />} />
                <Route path='/dashboardRequests' element={<DashboardRequests />} />
                <Route path='/testimonialRequests' element={<TestimonialRequests />} />
                <Route path='/testRequests' element={<TestRequests />} />
                <Route path='/presentationRequests' element={<PresentationRequests />} />
                <Route path='/company/:id' element={<Company />} />
                <Route path='/message/messages' element={<Messages />} />
                <Route path='/user/login' element={<Login />} />
                <Route path='/user/logout' element={<Logout />} />
                <Route path='/message/addMessage' element={<Contact />} />
                <Route path='/more' element={<More />} />
                <Route path='/*' element={<Error />} />
              </Routes>
              <Footer />
            </UserContext.Provider>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;