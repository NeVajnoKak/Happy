import React, { useState } from 'react'
import './ClientTable.css'

const clients = Array(10).fill({
  name: 'Здесь будет Фамилия и Имя',
  email: 'example.email@gmail.com',
  phone: '+7 (777) 777-77-77'
});
const ClientTable = () => {
  const [selectedClients, setSelectedClients] = useState(clients.map(() => false));
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedClients(clients.map(() => newSelectAll));
  };

  const handleSelectClient = (index) => {
    const newSelectedClients = [...selectedClients];
    newSelectedClients[index] = !newSelectedClients[index];
    setSelectedClients(newSelectedClients);
    setSelectAll(newSelectedClients.every(Boolean));
  };
  return (
    <>
    <div className="client-table-container">
      <div className="row">
        <div className="col ms-3"><div className='client-title-text'>Управление клиентами</div>  <p className='client-under-title-text'>Список клиентов сайта</p></div>
        <div className="col d-flex justify-content-end me-3"><button className="add-button">+ Добавить</button></div>
      </div>
      
     
      
      <table className="client-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
            </th>
            <th>ФИО</th>
            <th>EMAIL</th>
            <th>ТЕЛЕФОН</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedClients[index]}
                  onChange={() => handleSelectClient(index)}
                />
              </td>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>
                <button className="edit-button">✏️</button>
                <button className="delete-button">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
      {/* <div className='d-flex justify-content-end'>
        <table class="table w-75 me-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" className='text-uppercase'>фио</th>
              <th scope="col" className='text-uppercase'>email</th>
              <th scope="col" className='text-uppercase'>телефон</th>
              <th scope="col" ></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div> */}

    </>
  )
}

export default ClientTable