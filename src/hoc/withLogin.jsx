import { useEffect } from "react"

const withLogin = (WrappedComponent) => {
//se define nunevo componente que secre en el hoc
 
const ComponentWithLoging = (props) => {
    useEffect(() => {
        console.log(`😁${WrappedComponent.name} se monto`)
    },[])
    
    return(
        <WrappedComponent {...props}/>
    )

}

//devolvemos nuevo component
return ComponentWithLoging

} 
export default withLogin