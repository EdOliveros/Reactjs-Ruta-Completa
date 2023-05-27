import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context';

const Card = (props) => {

    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => showProduct(props.data)}
        >
            <figure 
                className='relative mb-2 w-full h-4/5'>
                <span 
                    className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'
                >{props.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={props.data.images[0]} alt='headphone' />
                <PlusCircleIcon 
                className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 text-black'
                onClick={() => {
                    context.setCount(context.count + 1)
                }}
                >+</PlusCircleIcon>          

            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{props.data.title}</span>
                <span className='text-lg font-medium'>${props.data.price}</span>
            </p>
        </div>
    );
}

export default Card