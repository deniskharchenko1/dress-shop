// import { Spinner } from '@chakra-ui/react'
import { FC } from 'react'

import { COLORS } from '@/config/color.config'
import spinner from './Spinner.svg';

const Loader: FC = () => {
	return (
		<img src={spinner.src} alt="" />
	)
}

export default Loader
