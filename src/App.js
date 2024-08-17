import './App.scss';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserContext';

function App() {
  const { user ,loginContext } = useContext(UserContext);

  console.log(user)

  useEffect(()=>{
    if(localStorage.getItem("token")){
      loginContext(localStorage.getItem("email"),localStorage.getItem("token"))
    }
  },[])

  return (
    <>
      <div className='app-container'>
          <Header/>
          <Container>
            <AppRoutes />
          </Container>

          {/* <ModalAddUser show={isShowModalAddNew} handleClose={handleClose} /> */}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </>
  );
}

export default App;
