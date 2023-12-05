"use client";
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const [search, setSearch] = useState("")

  function searchGitHubProfile(event: any) {
    setSearch(event.target.value)
  }
  useEffect(() => {
    axios.get(`https://api.github.com/users/${setSearch}`).then(Response => console.log(Response)).catch(Error => console.log(Error)).finally()
  }, [])
  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center flex-col'>
        <input type='text' placeholder='Digite o nome de perfil do GitHub' className='w-64 h-12 text-black' onChange={searchGitHubProfile} />
        <p>{search}</p>
      </div>
    </>
  )
}
