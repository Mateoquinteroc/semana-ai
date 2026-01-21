import { NavLink, useLocation } from 'react-router-dom';
import styles from './TabNavigation.module.css';

const TabNavigation = () => {
    const location = useLocation();
    const is2026 = location.pathname === '/' || location.pathname.startsWith('/2026');

    const tabs = [
        { name: '2026', path: '/2026' },
        { name: '2025', path: '/2025' },
        { name: '2024', path: '/2024' },
    ];

    return (
        <nav className={`${styles.navContainer} ${is2026 ? styles.nav2026 : ''}`}>
            {tabs.map((tab) => {
                const isActive = tab.path === '/2026' ? (location.pathname === '/2026' || location.pathname === '/') : location.pathname === tab.path;

                return (
                    <NavLink
                        key={tab.path}
                        to={tab.path}
                        className={`${styles.tab} ${is2026 ? styles.tab2026 : ''} ${isActive ? (is2026 ? styles.activeTab2026 : styles.activeTab) : ''}`}
                    >
                        <span className={styles.tabContent}>{tab.name}</span>
                    </NavLink>
                );
            })}
        </nav>
    );
};

export default TabNavigation;
