export const isAuthenticated = async()=>{
    try{
      const response = await fetch("http://localhost:3003/api/users/checkauth",{
        method:"GET",
        credentials:"include",
    });
    
    if (response.status===200){  
        return true;
    }
    return false;

    }catch(error){
        console.error("Erro checking authentication",error);
        return false;
    }
};