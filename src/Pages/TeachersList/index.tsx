import React from 'react'
import { PageHeader } from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';


import './style.css';


const TeachersList = () => {
    return (
       <div id="page-techer-list" className="container">
           <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" name="subject" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" name="week_day" id="week+day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" name="time" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
       </div>
    )
}

export default TeachersList;
