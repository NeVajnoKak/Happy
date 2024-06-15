import flower from '../../assets/img/flower.jpeg'
import Pagination from '../Pagination/Pagination';
import Slidebar from '../Slidebar/Slidebar';
import { Link } from 'react-router-dom'

import './Category.module.css'

const Category = ({ title, color, hidden }) => {
    const isHidden = isEmpty(hidden)

    function isEmpty(str) {
        if (str === undefined || str === null) {
            return false;
        }
        return str.trim() !== '';
    }

    return (
        <>
            <section className="py-5">
                <div className="container px-4 mt-5 ps-0">
                    <div className="row">
                        <Slidebar isHidden={isHidden} />
                        <div className="col">
                            <div className="row mb-3">
                                <div className="col">
                                    <div className="category-name mb-2">{title}</div>
                                    <div className={`${color} category-line`}></div>
                                </div>
                                <div className="col d-flex justify-content-end">
                                    <Link to="/products"><button className={`${color}  ${isHidden ? 'd-none' : ''} custom-btn category-btn `}>Посмотреть все</button></Link>
                                </div>
                            </div>
                            <div class={`${isHidden ? '' : 'd-none'} col-3 ps-0 dropdown' `}>
                                <button class="btn sort-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Популярные
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Лучшее</a></li>
                                    <li><a class="dropdown-item" href="#">Новинки (New)</a></li>
                                    <li><a class="dropdown-item" href="#">Дешевые</a></li>
                                </ul>
                            </div>
                            <div className="row gx-4 gx-lg-5 row-cols-2 mt-5 row-cols-md-3 row-cols-xl-4">
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        <img className="card-img-top border-bottom" src={flower} alt="..." />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="">Эквадорские розы, кустовые хризантемы, альстромерии</h5>
                                                <span className="text-muted text-decoration-line-through muted ">от 120 000 т</span><br />
                                                <span className="price">от 100 000 т</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${isHidden ? '' : 'd-none'}`}>
                                <Pagination/>
                            </div >

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Category