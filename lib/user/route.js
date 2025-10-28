
export const getUsers=async ()=>{
    const res=await fetch('/api/users')
    if(!res){
         throw new Error('failed to fetch users') 
    }
    return res.json();
}

export const createUser=async ()=>{
    const res=await fetch('/api/users',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
    return res.json()
}
export const UpdateUser=async ()=>{
    const res=await fetch('/api/users',{
        method:'PUT',
        headers:{'Content-Type':'application.json'},
body:JSON.stringify(data)
    })
    return res.json()
}
export const DeleteUSer=async ()=>{
    const res=await fetch('/api/users',{
        method:'DELETE',
        headers:{'Content-Type':'application.json'},
        body:JSON.stringify(data)
    })
    return res.json(data)
}