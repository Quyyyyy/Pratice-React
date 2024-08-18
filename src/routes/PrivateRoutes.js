import { useSelector } from 'react-redux';

const PrivateRoutes = (props) => {
    const user = useSelector(state => state.user.account);

    if (user && !user.auth){
        return <>
            You don't have permission to access this routes. 
        </>
    }

    //console.log(`asdfasfasf`)

    return (
        <>
          {props.children}
        </>
    )
}

export default PrivateRoutes;