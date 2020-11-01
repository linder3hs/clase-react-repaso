import React from 'react'
import RouterWithLayout from './RouterWithLayout'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
// Routes
import * as ROUTES from '../constants/routes'
// Layouts
import Layout from '../layouts/Main'
// Views
import HomeView from '../views/Home'
import NotFoundView from '../views/NotFound'
import FormView from '../views/Forms'
import TableView from '../views/Table'
import LoginView from '../views/Login'

const Routes = _ => {
    return (
        <BrowserRouter>
            <Switch>
                <RouterWithLayout
                    exact
                    path={ROUTES.HOME}
                    layout={Layout}
                    component={HomeView}
                />
                <RouterWithLayout
                    exact
                    path={ROUTES.TABLE}
                    layout={Layout}
                    component={TableView}
                />
                <RouterWithLayout
                    exact
                    path={ROUTES.FORMS}
                    layout={Layout}
                    component={FormView}
                />
                <Route
                    exact
                    path={ROUTES.NOT_FOUND}
                    component={NotFoundView}
                />
                <Route
                    exact
                    path={ROUTES.LOGIN}
                    component={LoginView}
                />
                <Redirect from="*" to={ROUTES.NOT_FOUND}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
