import { combineReducers } from 'redux'
import Product from './Product';
import ProductDetail from './ProductDetail'
import UserCart from './CartOfUser'
import OrderCart from './OrderOfUser';
import AdminOrder from './OrderOfAdmin';
import AdminAdvens from './AdminAdvens';
import Loading from './Loading';
import OrderDetail from './CommonsOrderDetail'
const myReducers = combineReducers({
    Product,
    ProductDetail,
    UserCart,
    OrderCart,
    AdminOrder,
    AdminAdvens,
    Loading,
    OrderDetail
});
export default myReducers;