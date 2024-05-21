import { Injectable } from '@nestjs/common';
import { ErrorManager } from '@shared/utils/error.manager';

const questions = {
  1: 'Primero que nada, ¿podrías decirme tu nombre completo?',
  2: '¿Podrías decirme tu número de teléfono? (Código de país + Código de área + Resto del número, por ejemplo: 1 2222 333333)',
  3: '¿Podrías adjuntar un avatar tuyo? (Escribe "omitir" si no deseas enviar tu avatar)',
  4: '¿Podrias decirme tu pais?',
  5: '¿Podrías decirme tu ciudad y estado actual? (Por ejemplo: Las Vegas, Nevada)',
  6: '¿Podrias decirme tu fecha de nacimiento?',
  7: 'Si tienes, ¿podrías proporcionarme un breve resumen de tu experiencia laboral?, escribe todo en un mensaje (Escribe "omitir" para evitar responder esta pregunta).',
  8: '¿Cuál es tu nivel académico?',
  9: '¿Podrias decirme tu area de trabajo?',
  10: '¿Podrías decirme cuáles son tus mejores habilidades? (Por favor, enumera las habilidades separadas por coma)',
  11: '¿Podrías decirme tus horarios de disponibilidad?',
  12: '¿Cuál es tu expectativa salarial? (En dólares)',
  13: '¿Podrias decirme tus idiomas?',
};

@Injectable()
export class QuestionsService {
  constructor() {}

  async getQuestion(id: number) {
    try {
      const question = questions[id];

      if (!question) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Question not found',
        });
      }

      return question;
    } catch (error) {
      ErrorManager.createSignatureError(error.message);
    }
  }
}
