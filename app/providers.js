'use client'

import { store } from "@/features/store"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export function Providers({ children }) {
  return (
    <Provider store={store}>
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  )
}
