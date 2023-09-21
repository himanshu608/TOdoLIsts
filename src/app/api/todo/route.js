import connectDB from "@/libs/MongoDb";
import ToDo from "@/models/todo";
import { NextResponse } from "next/server"


export async function GET(req){
  const url = new URL(req.url);
  const todoid = url.searchParams.get('todoid');
  await connectDB();

  if(todoid){
    const todos = await ToDo.findById(todoid);
    return NextResponse.json(todos);
  }
  const todos = await ToDo.find();
  return NextResponse.json(todos);
}

export async function POST(req){
  const result = await req;
  const body = await result.json();
  await connectDB();
  const data = await ToDo.create({
    title: body.title,
    description: body.description,
  })
  return NextResponse.json(data);
}

export async function PUT(req){
  const result = await req;
  const body = await result.json();

  await connectDB();
  const data = await ToDo.findByIdAndUpdate(body._id,{
    title : body.title,
    description : body.description
  })

  return NextResponse.json(data);
}

export async function DELETE(req){
  const result = await req;
  const body = await result.json();
  await connectDB();
  const data = await ToDo.findByIdAndDelete(body._id);
  return NextResponse.json(data);
}