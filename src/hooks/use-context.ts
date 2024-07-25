import { AppContext } from "@/contextApi/AppProvider";
import { AppContextType } from "@/types/types";
import { useContext } from "react"

const useGlobalContext = () => {
  return useContext(AppContext) as AppContextType
}

export default useGlobalContext;