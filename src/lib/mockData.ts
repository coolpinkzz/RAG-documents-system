import {
  User,
  Document,
  IngestionJob,
  Question,
  DocumentExcerpt,
} from "@/types";

// Mock users data
export const mockUsers: User[] = [
  {
    id: "1",
    username: "admin",
    email: "admin@example.com",
    role: "admin",
    createdAt: "2023-01-01T00:00:00Z",
  },
  {
    id: "2",
    username: "user1",
    email: "user1@example.com",
    role: "user",
    createdAt: "2023-01-02T00:00:00Z",
  },
  {
    id: "3",
    username: "user2",
    email: "user2@example.com",
    role: "user",
    createdAt: "2023-01-03T00:00:00Z",
  },
];

// Mock documents data
export const mockDocuments: Document[] = [
  {
    id: "1",
    title: "Annual Report 2023",
    description: "Company annual financial report",
    fileType: "pdf",
    fileSize: 2540000,
    uploadedBy: "1",
    uploadedAt: "2023-02-01T10:30:00Z",
    status: "processed",
    created_at: "2023-02-01T10:30:00Z",
    isInjected: false,
  },
  {
    id: "2",
    title: "Product Specifications",
    description: "Detailed specifications for new product line",
    fileType: "docx",
    fileSize: 1200000,
    uploadedBy: "2",
    uploadedAt: "2023-02-15T14:20:00Z",
    status: "processed",
    created_at: "2023-02-01T10:30:00Z",
    isInjected: false,
  },
  {
    id: "3",
    title: "Market Research Data",
    description: "Compiled market research for Q1 2023",
    fileType: "xlsx",
    fileSize: 3450000,
    uploadedBy: "1",
    uploadedAt: "2023-03-05T09:15:00Z",
    status: "pending",
    created_at: "2023-02-01T10:30:00Z",
    isInjected: false,
  },
];

// Mock ingestion jobs data
export const mockIngestionJobs: IngestionJob[] = [
  {
    id: "1",
    documentId: "1",
    documentTitle: "Annual Report 2023",
    status: "completed",
    progress: 100,
    startedAt: "2023-02-01T10:35:00Z",
    completedAt: "2023-02-01T10:40:00Z",
    startedat: "2023-02-01T10:35:00Z",
  },
  {
    id: "2",
    documentId: "2",
    documentTitle: "Product Specifications",
    status: "completed",
    progress: 100,
    startedAt: "2023-02-15T14:25:00Z",
    completedAt: "2023-02-15T14:30:00Z",
    startedat: "2023-02-15T14:25:00Z",
  },
  {
    id: "3",
    documentId: "3",
    documentTitle: "Market Research Data",
    status: "processing",
    progress: 45,
    startedAt: "2023-03-05T09:20:00Z",
    startedat: "2023-03-05T09:20:00Z",
  },
];

// Mock document excerpts
export const mockDocumentExcerpts: Record<string, DocumentExcerpt[]> = {
  "1": [
    {
      id: "101",
      documentId: "1",
      documentTitle: "Annual Report 2023",
      content:
        "Revenue increased by 15% year-over-year, reaching $120 million in 2023.",
      relevanceScore: 0.92,
    },
    {
      id: "102",
      documentId: "1",
      documentTitle: "Annual Report 2023",
      content: "The company expanded operations into 3 new markets in Asia.",
      relevanceScore: 0.85,
    },
  ],
  "2": [
    {
      id: "201",
      documentId: "2",
      documentTitle: "Product Specifications",
      content:
        "The new model features 50% improved battery life compared to the previous generation.",
      relevanceScore: 0.94,
    },
    {
      id: "202",
      documentId: "2",
      documentTitle: "Product Specifications",
      content:
        "All components are manufactured using recycled materials to reduce environmental impact.",
      relevanceScore: 0.88,
    },
  ],
};

// Mock Q&A data
export const mockQuestions: Question[] = [
  {
    id: "1",
    question: "What was the revenue in 2023?",
    answer:
      "According to the 2023 Annual Report, revenue increased by 15% year-over-year, reaching $120 million in 2023.",
    documentExcerpts: mockDocumentExcerpts["1"],
    askedAt: "2023-04-01T11:30:00Z",
    userId: "2",
  },
  {
    id: "2",
    question: "What are the new features of the product?",
    answer:
      "The new model features 50% improved battery life compared to the previous generation. Additionally, all components are manufactured using recycled materials to reduce environmental impact.",
    documentExcerpts: mockDocumentExcerpts["2"],
    askedAt: "2023-04-02T14:45:00Z",
    userId: "3",
  },
];

// Helper function to simulate API delay
export const simulateDelay = (ms = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms));
