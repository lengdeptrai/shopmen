import style from './TopSellingProduct.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import ProductItem from '~/components/ProductItem';
import * as topSellService from '~/apiService/topSellService';


const cx = classNames.bind(style);

function TopSellingProduct() {


    const [listTopSelling, setListTopSell] = useState([])

    useEffect(()=>{


        const fechApi = async () =>{
            const result = await topSellService.topSellService();
            setListTopSell(result)
        }

        fechApi();
        
    },[])

    useEffect(()=>{

    },[listTopSelling])



    return (
        <div className={cx('wrapper')}>
            <div className={cx('suggestions')}>
                <span>TOP BÁN CHẠY</span>
            </div>
            <div className={cx('top_selling')}>
                <ul className={cx('list_top_selling')}>
                    {listTopSelling.map(result => (
                        <li className={cx('item_top_selling')} key={result.id}>
                            <div className={cx('add_item')} >
                                <span>Thêm vào giỏ hàng</span>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <Link to='/viewproduct'>
                                <ProductItem data={result}/>
                            </Link >
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TopSellingProduct;