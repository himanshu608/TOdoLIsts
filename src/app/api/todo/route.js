import connectDB from "@/libs/MongoDb";
import ToDo from "@/models/todo";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req){
  const session = await getServerSession(authOptions)
  const url = new URL(req.url);
  const todoid = url.searchParams.get('todoid');
  await connectDB();

  if(todoid){
    const todos = await ToDo.findById(todoid);
    return NextResponse.json(todos);
  }
  const todos = await ToDo.find({userId:session?.user?.email});
  return NextResponse.json(todos);
}

export async function POST(req){
  const result = await req;
  const body = await result.json();
  await connectDB();
  const session = await getServerSession(authOptions)
  const data = await ToDo.create({
    userId:session?.user?.email,
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