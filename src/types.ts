export interface PlaceToVisit {
  name: string;
  description: string;
  image: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Ethnicity {
  id: string;
  name: string;
  region: string;
  origin: string;
  clothingImages: string[];
  habitatImage: string;
  languageName: string;
  languageSample: string;
  bestPlaces: PlaceToVisit[];
  description: string;
  habitatDescription: string;
  clothingDescription: string;
  festivals: string;
  cuisine: string;
  interestingFact: string;
  quizQuestions: QuizQuestion[];
}
