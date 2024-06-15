import React, { useState } from 'react'

import filter from '../../../assets/img/filter.svg'
import Card from './Card/Card'

const Filter = () => {

    const [data, setData] = useState({
        titles: ['Тип букета', 'Вид цветов', 'Размер бутона', 'Цвет', 'Упаковка', 'Высота букета'],
        arrays: [
            ['Букеты', 'Цветы в коробке'],
            ['Розы', 'Харизантемы', 'Тюльпаны', 'Пионы', 'Гортензии', 'Дельфиниум', 'Лилия'],
            ['40', '50', '70'],
            ['Красные'],
            ['S', 'M', 'L', 'XL'],
            ['100', '120']
        ]
    })


    return (
        <>
            <div class="card" style={{ width: "22rem" }}>
                <div class="card-body">
                    <div className="row border-bottom pb-3">
                        <div className="col-1 me-2">
                            <img src={filter} alt="" width={20} height={20} />
                        </div>
                        <div className="col">
                            <div className='filter-text'>Фильтр</div>
                        </div>
                    </div>
                    <Card data={data} />
                </div>
            </div>
        </>
    )
}

export default Filter