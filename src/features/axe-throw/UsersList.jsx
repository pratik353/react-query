import React from 'react';
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getAllUsers } from '../../api/axe-throw-usersApi';

const UsersList = () => {
    const queryClient = useQueryClient();

    const {
        isLoading,
        isError,
        error,
        data: users,
      } = useQuery("users", getAllUsers);

      console.log(users);

      let content;
      if (isLoading) {
        content = <p>Loading...</p>
      }else if (isError) {
        content= <p>{error.message}</p>
      }else{
        content = users.data.adminData.map((user, index) => {
            return(
                <div key={index}>
                    <p>{user.identity}</p>
                </div>
            )
        })
      }

  return (
  <>
  <div>UsersList</div>
  <div>
    {content}
  </div>
  </>
  )
}

export default UsersList