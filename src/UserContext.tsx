import React from 'react'

type UserContextProps ={
  children: React.ReactNode
}

type UserContextType = {
  languageStorage : string
  setLanguageStorage : (newState: string)=> void
}

const initialValue = {
  languageStorage : "en",
  setLanguageStorage: ()=> {}
}

export const UserContext = React.createContext<UserContextType>(initialValue)

export const UserContextProvider=({children}: UserContextProps) =>{
    const [languageStorage, setLanguageStorage] = React.useState(initialValue.languageStorage)

    React.useEffect(()=>{
      localStorage.setItem("lang", languageStorage)
    },[languageStorage])



  return ( 
    <UserContext.Provider value={{languageStorage, setLanguageStorage}}>
      {children}
    </UserContext.Provider>
  )
}
