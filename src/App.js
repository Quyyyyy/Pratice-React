import './App.scss';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import {  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleRefresh } from './redux/actions/userAction';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    if(localStorage.getItem("token")){
      dispatch(handleRefresh());
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
