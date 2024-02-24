import connectMongoDB from "@/libs/mongodb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title } = await request.json();
  await connectMongoDB();
  await Todo.create({ title });
  return NextResponse.json({ message: "Todo Created" }, { status: 201 });
}


export async function GET() {
  await connectMongoDB();
  const todoList = await Todo.find();
  return NextResponse.json({ todoList });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Todo deleted" }, { status: 200 });
}