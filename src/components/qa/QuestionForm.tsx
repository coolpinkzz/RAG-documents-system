import { useState } from "react";
import Button from "@/components/ui/Button";
import Textarea from "@/components/ui/Textarea";

interface QuestionFormProps {
  onSubmitQuestion: (question: string) => Promise<void>;
  isLoading: boolean;
}

export default function QuestionForm({
  onSubmitQuestion,
  isLoading,
}: QuestionFormProps) {
  const [question, setQuestion] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!question.trim()) {
      setError("Please enter a question");
      return;
    }

    setError(null);

    try {
      await onSubmitQuestion(question);
      // Don't clear the question immediately to allow the user to see what they asked
    } catch (error) {
      // Error will be handled by parent component
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        label="Ask a question about your documents"
        id="question"
        value={question}
        onChange={(e) => {
          setQuestion(e.target.value);
          if (error) setError(null);
        }}
        placeholder="e.g., What was our revenue growth last quarter?"
        rows={3}
        error={error as any}
        disabled={isLoading}
      />

      <div className="flex justify-end">
        <Button
          type="submit"
          isLoading={isLoading}
          disabled={isLoading || !question.trim()}
        >
          {isLoading ? "Processing..." : "Ask Question"}
        </Button>
      </div>
    </form>
  );
}
