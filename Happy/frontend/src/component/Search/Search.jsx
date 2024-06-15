import React from 'react'

const Search = () => {
  return (
    <>
        <form action="" className='mt-5 px-lg-5 mx-5'>
                <div className="d-flex justify-content-center">
                    <input type="text" className='form-input w-100' placeholder='Поиск товаров'/>
                    <button className={`gold custom-btn search-btn`}>Поиск</button>
                </div>
        </form>
        
    </>
  )
}

export default Search