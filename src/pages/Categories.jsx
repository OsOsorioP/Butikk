import React from 'react'
import { CategoriesHeader } from '../components/CategoriesHeader';
import { Outlet } from "react-router";

export const Categories = () => {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
    </>
  )
}
