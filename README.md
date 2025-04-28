# Simple RAG-Based Document Ingestion System

### This project lets you upload documents, ingest them into a vector database (using Supabase and OpenAI embeddings), and retrieve information easily with Retrieval-Augmented Generation (RAG).

## ✨ Features
1. Upload PDF documents.
2. Ingest document content into a vector database.
3. Track ingestion progress (0% → 100%).
4. Simple ingestion management APIs.
5. Ready for RAG-based document retrieval.

## 🛠️ Tech Stack

1. Next.js (API routes)
2. Formidable (for file uploads)
3. Supabase (database + storage + vector store)
4. LangChain (text splitting & RAG setup)
5. OpenAI Embeddings (for vectorization)

## 🚀 How It Works

Upload API
Upload a PDF along with title and description. Metadata is saved in Supabase.

Ingestion API
Process the uploaded PDF:

Read and extract text.

Split into chunks.

Generate embeddings.

Store vectors in Supabase.

Track ingestion progress (status, progress, startedAt, completedAt).

Update Progress API
Update ingestion progress manually (for real-time tracking during large processing).

Get Ingestion Status API
Fetch the status of an ingestion job anytime (processing / completed).

## 📦 APIs

### API	Method	Description

#### /api/upload - POST:	Upload a PDF file with title and description
#### /api/ingestion	- POST:	Start ingestion for a document
#### /api/ingestion - GET:     retrieve ingested documents with status
#### /api/ask - POST:    ask a question and RAG will give you information based on previous ingestion document
#### /api/get-documents  -     GET:    retrieve uploaded document with status


## ⚡ Setup Instructions

### Clone the repo:
git clone https://github.com/your-username/simple-rag-ingestion.git
cd simple-rag-ingestion

### Install dependencies:
`npm install`

Create a .env.local file:

#### NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
#### NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
#### OPENAI_API_KEY=your-openai-api-key

Run the development server:
npm run dev


## 📚 Database Schema

### Table: uploads

#### id	UUID (Primary Key)
#### title	Text
#### description	Text
#### file	Text (file path or storage URL)
#### Table: ingestions

### Table: ingestion

#### id	UUID (Primary Key)
#### documentId	UUID (Foreign key to uploads)
#### documentTitle	Text
#### status	Text (processing / completed)
#### progress	Integer (0 to 100)
#### startedAt	Timestamp
#### completedAt	Timestamp

## 🧑‍💻 Author
#### Made with ❤️ by Pratik Yadav
