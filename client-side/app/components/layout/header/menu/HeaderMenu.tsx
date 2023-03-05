import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { menu } from './HeaderMenu.data'
import styles from './HeaderMenu.module.scss'
import MenuItem from './menu-item/MenuItem'

const HeaderMenu: FC = () => {
	return (
		<div className={styles.menu}>
			<nav>
				<ul>
					{menu.map(item => (
						<MenuItem key={item.link} item={item} />
					))}
				</ul>
			</nav>
		</div>
	)
}

export default HeaderMenu
