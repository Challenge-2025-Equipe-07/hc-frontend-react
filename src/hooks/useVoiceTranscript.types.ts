export interface CustomSpeechRecognition extends SpeechRecognition {
  continuous: boolean;
  lang: string;
  interimResults: boolean;
  onstart: () => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
  onresult: (event: SpeechRecognitionEvent) => void;
}

export type VoiceTranscriptOptions = {
  onTranscriptionEnd?: (transcript: string) => void;
};
