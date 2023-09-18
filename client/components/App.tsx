import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import '../styles/index.css'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Globe from './Globe.tsx'
import Timeline from './Timeline.tsx'
import Filters from './Filters.tsx'
import CountrySelect from './CountrySelect.tsx'
import { getAllInventions } from '../apis/api-inventions.ts'
import { Invention } from '../../models/Inventions.ts'

function App() {
  const {
    data: inventionsData,
    isLoading,
    isError,
    error,
  } = useQuery<Invention[], Error>(['inventions'], getAllInventions)
  const [checkboxStatus, setCheckboxStatus] = useState('inventions')

  useEffect(() => {
    console.log('App:', checkboxStatus)
  }, [checkboxStatus])

  if (isLoading) {
    return <p>Loading....</p>
  }

  if (isError || !inventionsData) {
    return <p>There was an error: {error?.message}</p>
  }

  return (
    <div className="h-screen bg-[url('/space-background.jpg')] bg-cover">
      <Header />
      <section className="main">
        <div className="flex w-screen">
          <Globe />
          <div className="flex w-1/2 flex-col h-[36rem]">
            <div className="flex flex-row gap-2 justify-between">
              <Filters
                setCheckboxStatus={setCheckboxStatus}
                checkboxStatus={checkboxStatus}
              />
              <CountrySelect inventions={inventionsData} />
            </div>
            <Outlet context={{ inventionsData }} />
          </div>
        </div>
        <Timeline inventions={inventionsData} />
      </section>
      <Footer />
    </div>
  )
}

export default App
