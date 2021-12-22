import React, { useEffect } from 'react';

import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSetector';
import { fetchUsers } from '../store/action-creators/user';


const UserList=()=> {
    const {users, loading, error} = useTypedSelector(state=> state.user)
    const {fetchUsers}= useActions()


    useEffect(()=>{
        fetchUsers()

    },[])
    if(loading){
        return <h1>идет загрузка...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    

  return (
    <div>
        {users.map(user =>
            <div key={user.id}>{user.name}</div>
        )}
    </div>
  )

}

export default UserList;
