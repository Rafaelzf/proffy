import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './Pages/Landing';
import TeachersList from './Pages/TeachersList';
import TeachersForm from './Pages/TeachersForm';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" exact component={TeachersList} />
            <Route path="/give-classes" exact component={TeachersForm} />
        </BrowserRouter>
    )
}

export default Routes;