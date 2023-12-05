"use client"
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [username, setUsername] = useState("joaovictxrz");
  const [userData, setUserData] = useState();

  function searchGitHubProfile(event: any) {
    setUsername(event.target.value);
  }

  useEffect(() => {
    if (username.trim() !== "") {
      axios.get(`https://api.github.com/users/${username}`)
        .then((response) => setUserData(response.data))
        .catch((error) => console.log(error))
        .finally();
    }
  }, [username]);

  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center flex-col gap-5'>
        <input type='text' placeholder='Digite o nome de perfil do GitHub' className='w-64 h-12 text-black' onChange={searchGitHubProfile} />

        {userData && (
          <>
            <img src={userData.avatar_url} alt={`Avatar de ${userData.login}`} />
            <div>{userData.login}</div>
          </>
        )}
      </div>
    </>
  );
}
