"use client";

import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/course", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to get data from");
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
    body: {
      courseName: "HTML",
      courseDescription: "Curso sobre html",
      courseImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
    }
  });

  if (!res.ok) {
    throw new Error("Failed to add course");
  }

  const data = await res.json();
  getData();
}

async function Courses() {
  const data = await getData();

  return (
    <div
      style={{
        display: "flex",
        minWidthwidth: "100vh",
        display: "block",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 50 }} onClick={() => handleAddCourse()}>
        +
      </div>
      <div style={{ display: "flex" }}>
        {data?.map((course) => (
          <div key={0}
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