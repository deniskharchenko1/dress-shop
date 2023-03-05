import { AddIcon, MinusIcon } from '@chakra-ui/icons'
// import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC, useState } from 'react'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { ICartItem } from '@/types/cart.interface'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const {  } =
		useState({
			step: 1,
			defaultValue: 1
		})


	const { removeFromCart, changeQuantity } = useActions()

	const { cart } = useCart()
	const quantity = cart.find(cartItem => cartItem.id === item.id)?.quantity

	return (
		<div className='mt-3'>
{/* 		
				<button
					{...dec}
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					disabled={quantity === 1}
				>
					<MinusIcon fontSize={13} />
				</button>

				<input
					{...input}
					focusBorderColor='green.400'
					readOnly
					_hover={{ cursor: 'default' }}
					value={quantity}
				/>

				<button
					{...inc}
					onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
				>
					<AddIcon fontSize={13} />
				</button>
			

			<button
				
				color='#F23C3D'
				
				size='sm'
				opacity={0.8}
				onClick={() => removeFromCart({ id: item.id })}
			>
				Remove
			</button> */}
		</div>
	)
}

export default CartActions
