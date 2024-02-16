'use client'
import { Suspense, useState } from 'react';
import styles from '../../styles/tab.module.css';
import MovieVideos from './movie-videos';
import MovieSimilar from './movie-similar';
import MovieCredits from './movie-credits';

interface TabProps {
  id: string;
}

export default function Tab({ id }: TabProps)  {
	const [activeTab, setActiveTab] = useState(0);

	function handleTabClick(index:number) {
		setActiveTab(index);
	}

	return (
		<div className='mgt50'>
			<div className={styles.tab_type01}>
				<ul className={styles.tab}>
					<li className={activeTab === 0 ? 'on' : ''} onClick={() => handleTabClick(0)}>
						<a>Videos</a>
					</li>
					<li className={activeTab === 0 ? 'on' : ''} onClick={() => handleTabClick(1)}>
						<a>Similar</a>
					</li>
					<li className={activeTab === 2 ? 'on' : ''} onClick={() => handleTabClick(2)}>
						<a>Credits</a>
					</li>
				</ul>
				<div className={`${styles.tab_conts} ${activeTab === 0 ? 'first' : ''}`} style={{ display: activeTab === 0 ? 'block' : 'none' }}>
					<Suspense fallback={<h1>Loading movie videos</h1>}>
						<MovieVideos id={id}/>
					</Suspense>
				</div>
				<div className={styles.tab_conts} style={{ display: activeTab === 1 ? 'block' : 'none' }}>
					<Suspense fallback={<h1>Loading similar movie</h1>}>
						<MovieSimilar id={id}/>
					</Suspense>
				</div>
				<div className={styles.tab_conts} style={{ display: activeTab === 2 ? 'block' : 'none' }}>
					<Suspense fallback={<h1>Loading movie credits</h1>}>
						<MovieCredits id={id}/>
					</Suspense>
				</div>
			</div>
		</div>
	)
}
