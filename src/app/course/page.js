"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/course");
  if (!res.ok) {
    throw new Error("Failed to get data");
  }

  const data = await res.json();

  return data;
}

async function handleAddCourse() {
  const res = await fetch("http://localhost:3000/api/course", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      courseName: "HTML",
      courseDescription: "Curso sobre html",
      courseImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to add course");
  }

  const addedCourse = await res.json();

  setData((prevData) => [...prevData, addedCourse]);
}

function Courses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setData(response);
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        minWidth: "100vh",
        display: "block",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 50 }} onClick={() => handleAddCourse()}>
        +
      </div>
      <div style={{ display: "flex" }}>
        {data.map((course, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              background: "lightgrey",
              margin: 10,
              width: 300,
              height: 300,
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <h2>{course.courseName}</h2>
            <Image src={course.courseImage} width={100} height={100} />
            <p>Course Description: {course.courseDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;