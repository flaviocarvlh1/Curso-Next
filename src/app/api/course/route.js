import { NextResponse } from "next/server";

const courses = [
  {
    id: 1,
    courseName: "React Foundamentals",
    courseDescription: "Curso sobre conceitos básicos de React",
    courseImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    id: 2,
    courseName: "Python Foundamentals",
    courseDescription: "Curso sobre conceitos básicos de Python",
    courseImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
  },
  {
    id: 3,
    courseName: "JavaScript Advanced",
    courseDescription: "Curso sobre conceitos avançados de JavaScript",
    courseImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  },
];

export async function GET() {
  return NextResponse.json(courses);
}

export async function POST(request) {
  const newCourse = request.body;
  const newId = courses.length + 1;
  const courseWithId = {
    id: newId,

    courseName: "HTML",
    courseDescription: "Curso sobre html",
    courseImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
  };

  courses.push(courseWithId);
  return NextResponse.json(courseWithId);
}