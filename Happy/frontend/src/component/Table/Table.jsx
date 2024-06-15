import React from 'react'

const Table = ({isHistory}) => {
    return (
        <>
        <div className="row">
            <div className="col-3"></div>
            <div className="col mt-5 me-5">
            <table class="table table-hover">
                <thead>
                    <tr >
                        <td className='text-center' scope="align-middle col">№ заявки</td>
                        <td scope="col">Состав заказа</td>
                        <td scope="col">Статус</td>
                        <td scope="col">Сумма заказа</td>
                        <td scope="col">Адрес доставки</td>
                        {isHistory === true ?
                        <th scope="col">Чек</th>
                        :
                        <th scope="col">Коментарии</th>
                    }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-center' scope="row">1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>

                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td className='text-center' scope="row">2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>

                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td className='text-center' scope="row">3</td>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@mdo</td>
                        <td>@mdo</td>

                        <td>@mdo</td>

                    </tr>
                </tbody>
            </table>
            </div>
        </div>
            
        </>
    )
}

export default Table