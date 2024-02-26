import { useQuery } from '@tanstack/react-query';

// query function
export const fetchGithubUser = async () => {
  const res = await fetch('https://api.github.com/users/pratik353');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  console.log(data);
//   const user: TGithubUser = {
  const user= {
    name: data?.name || '',
    bio: data?.bio || '',
  };
  return user;
};

export const useGithubUser = () => {
  return useQuery({
    queryKey: ['userData'], // unique key of API query  
    queryFn: fetchGithubUser, // query function to hit API
  })
};