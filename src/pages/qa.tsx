import { useState, useEffect } from 'react';
import Head from 'next/head';
import MainLayout from '@/components/layout/MainLayout';
import QuestionForm from '@/components/qa/QuestionForm';
import AnswerDisplay from '@/components/qa/AnswerDisplay';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Question } from '@/types';
import { mockQuestions } from '@/lib/mockData';
import { fetchWithAuth } from '@/lib/api';
import ProtectedRoute from '@/lib/protectedRoute';

export default function QA() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [historyLoading, setHistoryLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch question history
  useEffect(() => {
    const fetchQuestionHistory = async () => {
      try {
        setHistoryLoading(true);
        // In a real application, this would fetch from the API
        // const response = await fetchWithAuth<Question[]>('/qa/history');
        
        // For now, use the mock data
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
        setQuestions(mockQuestions);
      } catch (error) {
        console.error('Error fetching question history:', error);
        setError('Failed to load question history');
      } finally {
        setHistoryLoading(false);
      }
    };

    fetchQuestionHistory();
  }, []);

  const handleAskQuestion = async (questionText: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // In a real application, this would call the API
      // const response = await fetchWithAuth<Question>('/qa/ask', {
      //   method: 'POST',
      //   body: JSON.stringify({ question: questionText }),
      // });
      
      // For now, simulate an API response with mock data
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate processing time
      
      // Create a mock response
      const newQuestion: Question = {
        id: `q${Date.now()}`,
        question: questionText,
        answer: `This is a simulated answer to your question: "${questionText}". In a real application, this would be generated using RAG techniques to provide accurate information based on your documents.`,
        documentExcerpts: mockQuestions[0].documentExcerpts, // Use existing excerpts for demo
        askedAt: new Date().toISOString(),
        userId: '1', // Assume current user
      };
      
      setCurrentQuestion(newQuestion);
      setQuestions(prev => [newQuestion, ...prev]);
    } catch (error) {
      console.error('Error asking question:', error);
      setError('Failed to process your question. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectQuestion = (question: Question) => {
    setCurrentQuestion(question);
  };

  return (
    <ProtectedRoute>
      <Head>
        <title>Q&A | DocuQuery</title>
      </Head>
      <MainLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Document Q&A</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Question input and answer display */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <QuestionForm 
                  onSubmitQuestion={handleAskQuestion} 
                  isLoading={isLoading}
                />
                {error && (
                  <div className="mt-4 p-3 text-sm text-red-700 bg-red-100 rounded-md">
                    {error}
                  </div>
                )}
              </Card>

              <AnswerDisplay 
                currentQuestion={currentQuestion} 
                isLoading={isLoading} 
              />
            </div>

            {/* Question history */}
            <div className="md:col-span-1">
              <Card title="Question History">
                {historyLoading ? (
                  <div className="flex justify-center py-10">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                ) : questions.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-600">You haven&apos;t asked any questions yet.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {questions.map((question) => (
                      <div
                        key={question.id}
                        className={`p-3 rounded-md cursor-pointer transition ${
                          currentQuestion?.id === question.id
                            ? 'bg-blue-50 border border-blue-200'
                            : 'hover:bg-gray-50 border border-gray-200'
                        }`}
                        onClick={() => handleSelectQuestion(question)}
                      >
                        <p className="font-medium text-gray-900 text-sm line-clamp-2">
                          {question.question}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(question.askedAt).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </MainLayout>
    </ProtectedRoute>
  );
}
