import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const PrivateRoutes = (props) => {
    const { user  } = useContext(UserContext);

    if (user && !user.auth){
        return <>
            You don't have permission to access this routes. 
        </>
    }

    console.log(`asdfasfasf`)

    return (
        <>
          {props.children}
        </>
    )
}

export default PrivateRoutes;