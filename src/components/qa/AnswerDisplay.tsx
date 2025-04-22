import { useEffect, useRef } from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { Question, DocumentExcerpt } from '@/types';

interface AnswerDisplayProps {
  currentQuestion: Question | null;
  isLoading: boolean;
}

export default function AnswerDisplay({ currentQuestion, isLoading }: AnswerDisplayProps) {
  const answerRef = useRef<HTMLDivElement>(null);
  
  // Scroll to answer when a new one is displayed
  useEffect(() => {
    if (currentQuestion && answerRef.current) {
      answerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentQuestion]);

  if (isLoading) {
    return (
      <Card>
        <div className="flex flex-col items-center justify-center py-8">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600">Analyzing your documents and generating an answer...</p>
        </div>
      </Card>
    );
  }

  if (!currentQuestion) {
    return (
      <Card>
        <div className="text-center py-16">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900">No questions asked yet</h3>
          <p className="text-gray-600 mt-2">
            Ask a question about your documents to get an answer with relevant excerpts.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div ref={answerRef}>
      <Card>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Your Question</h3>
            <p className="text-gray-800 p-3 bg-gray-50 rounded-md">{currentQuestion.question}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Answer</h3>
            <div className="p-4 bg-blue-50 rounded-md border border-blue-100">
              <p className="text-gray-800 whitespace-pre-line">{currentQuestion.answer}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Source Documents</h3>
            <div className="space-y-4">
              {currentQuestion.documentExcerpts.map((excerpt) => (
                <div key={excerpt.id} className="p-4 bg-white rounded-md border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-700">{excerpt.documentTitle}</div>
                    <Badge variant="info">
                      Relevance: {Math.round(excerpt.relevanceScore * 100)}%
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">{excerpt.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
