export interface IUserResponse {
  success: boolean;
  data: User;
  error: any;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

export interface Document {
  id: string;
  title: string;
  description: string;
  fileType: string;
  fileSize: number;
  uploadedBy: string;
  uploadedAt: string;
  status: "pending" | "processed" | "error";
  file?: string;
  created_at: string;
  isInjected: boolean;
}

export interface IngestionJob {
  id: string;
  documentId: string;
  documentTitle: string;
  status: "queued" | "processing" | "completed" | "failed";
  progress: number;
  startedat?: string;
  startedAt?: string;
  completedAt?: string;
  error?: string;
  updatedat?: string;
}

export interface Question {
  id: string;
  question: string;
  answer: string;
  documentExcerpts: DocumentExcerpt[];
  askedAt: string;
  userId: string;
}

export interface DocumentExcerpt {
  id: string;
  documentId: string;
  documentTitle: string;
  content: string;
  relevanceScore: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
