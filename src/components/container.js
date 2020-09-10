import React from "react"
import Header from "../components/header"

export default function Container({ children }) {
  return (
    <div>
        <Header />
        {children}
    </div>)
}