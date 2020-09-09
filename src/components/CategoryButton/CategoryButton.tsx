import React, { useContext } from 'react'
import { handleCategoryContext } from '../../pages/home/HomePage'
import './CategoryButton.scss'

const CategoryButton: React.FC = ({ children }) => {
  const { category, handleCategory } = useContext(handleCategoryContext)

  return (
    <button
      className={category === children ? 'clicked' : 'unclicked'}
      onClick={() => handleCategory(children as string)}
    >
      {children}
    </button>
  )
}

export default CategoryButton
