import React from "react";
import Student from "./Student";

function StudentList(props) {
  if(props.studentListVar.length >0) { return (
        <div>
            <ul>
                {
                    props.studentListVar.map(
                        (stud, index) => {
                            return (<Student
                                setStudentId={props.setStudentId}
                                setStudentName={props.setStudentName}
                                setStudentEmail={props.setStudentEmail}
                                setStudentPhone={props.setStudentPhone}
                                setStudentList={props.setStudentList}
                                student={stud} key={index} />)
                        }
                    )
                }
            </ul>
        </div>
    )}
    else return null
}
export default StudentList;