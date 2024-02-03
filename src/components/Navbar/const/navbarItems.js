import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import DnsIcon from '@mui/icons-material/Dns';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: 'Авторизація',
        route: 'authentication',
    },
    {
        id: 1,
        icon: <DnsIcon />,
        label: 'Ділянки землі',
        route: 'database',
    },
    {
        id: 2,
        icon: <ImageIcon />,
        label: 'Переглянути заброньовані ділянки',
        route: 'storage',
    },
    {
        id: 3,
        icon: <PublicIcon />,
        label: 'Переглянути придбані ділянки',
        route: 'hosting',
    },
    {
        id: 4,
        icon: <SettingsEthernetIcon />,
        label: 'Інструкції для придбання',
        route: 'functions',
    },
]