
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export class GeminiAssistant {
  private ai: GoogleGenAI;
  
  constructor() {
    this.ai = new GoogleGenAI({ apiKey: API_KEY || "" });
  }

  async chat(message: string, history: { role: 'user' | 'assistant', content: string }[]) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(h => ({
            role: h.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: h.content }]
          })),
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: `
            Você é o "Matheus Digital", o assistente virtual do portfólio de Matheus Silva, um Engenheiro de Inteligência Artificial Moderno.
            Seu tom deve ser: Técnico, inteligente, proativo e profissional, mas acessível.
            Especialidades: Python, agentes de IA, Engenharia de prompt, automações.
            Sua missão: Explicar os projetos do Matheus, falar sobre sua stack tecnológica e facilitar o contato para parcerias.
            Responda de forma concisa em Português do Brasil.
            Não mencione detalhes técnicos do modelo Gemini, aja como se fizesse parte da infraestrutura do portfólio.
          `,
          temperature: 0.8,
        },
      });

      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Ocorreu um desvio nos meus circuitos neurais. Pode reformular a pergunta?";
    }
  }
}

export const assistant = new GeminiAssistant();
