"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface User {
  login: string;
  avatar_url: string;
}

export default function Home() {
  const [username, setUsername] = useState("joaovictxrz");
  const [userData, setUserData] = useState<User | null>();

  function searchGitHubProfile(event: any) {
    setUsername(event.target.value);
  }

  useEffect(() => {
    if (username.trim() !== "") {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((response) => (setUserData(response.data), setUsername("")))
        .catch((error) => console.log(error))
        .finally();
    }
  }, [username]);

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center flex-col">
        <div className="space-y-2 flex flex-col mb-2">
          <label htmlFor="username">Nome de Usuário:</label>
          <input
            type="text"
            placeholder={`Perfil de ${userData?.login || "joaovictxrz"}`}
            className="px-2 text-black rounded-sm"
            onChange={searchGitHubProfile}
          />
        </div>

        {userData && (
          <>
            <Image
              src={userData.avatar_url}
              width={500}
              height={500}
              alt={`Avatar de ${userData.login}`}
              className="rounded-full"
            />
            <div>{userData.login}</div>
          </>
        )}
      </div>
    </>
  );
}
