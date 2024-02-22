import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import LockPersonIcon from '@mui/icons-material/LockPerson';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: 'Авторизація',
        route: 'authentication',
    },
    {
        id: 1,
        icon: <AnnouncementIcon />,
        label: 'Доступні ділянки',
        route: 'database',
    },
    {
        id: 2,
        icon: <LockPersonIcon />,
        label: 'Переглянути заброньовані ділянки',
        route: 'storage',
    },
    {
        id: 3,
        icon: <BusinessCenterIcon />,
        label: 'Переглянути придбані ділянки',
        route: 'hosting',
    },
]