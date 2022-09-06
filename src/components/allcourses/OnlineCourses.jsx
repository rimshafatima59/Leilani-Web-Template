import React from 'react'
import { online } from '../../dummydata'
// import Title from '../common/title/Title'
import Heading from "../common/heading/Heading"

const OnlineCourses = () => {
  return (
    <>
        <section class = "online">
            <div className="container">
                <Heading subtitle="COURSES" title="Browse Our Online Courses" />

                <div className="content grid3">
                    {online.map((val) => (
                        <div className="box">
                            <div className="img">
                                <img src = {val.cover} alt = "" />
                                <img src = {val.hoverCover} alt = "" className="show" />
                            </div>
                            <h1>{val.courseName}</h1>
                            <span>{val.course}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default OnlineCourses