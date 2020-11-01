import React from 'react'
import {Link} from 'react-router-dom'
import clsx from 'clsx'
import * as ROUTES from '../../constants/routes'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {
    Drawer,
    CssBaseline,
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    IconButton
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import HomeIcon from '@material-ui/icons/Home'
import AppsIcon from '@material-ui/icons/Apps'
import ContactMailIcon from '@material-ui/icons/ContactMail';

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}))

const PersistentDrawerLeft = props => {
    const classes = useStyles()
    const theme = useTheme()
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = _ => setOpen(true)
    const handleDrawerClose = _ => setOpen(false)

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Codigo Lista de Alumnos
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <Link to={ROUTES.HOME}>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItem>
                    </Link>
                    <Link to={ROUTES.TABLE}>
                        <ListItem button>
                            <ListItemIcon>
                                <AppsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Tablas"/>
                        </ListItem>
                    </Link>
                    <Link to={ROUTES.FORMS}>
                        <ListItem button>
                            <ListItemIcon>
                                <ContactMailIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Formulario"/>
                        </ListItem>
                    </Link>
                </List>
                <Divider/>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader}/>
                {/*   Content  */}
                {props.children}
            </main>
        </div>
    )
}

export default PersistentDrawerLeft
