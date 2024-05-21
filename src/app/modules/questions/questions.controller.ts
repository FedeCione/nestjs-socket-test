import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QuestionsService } from './questions.service';

@ApiTags('Questions')
@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Get(':id')
  @ApiOperation({ description: 'Get Question by ID' })
  @ApiParam({ name: 'id', type: Number, required: true })
  @ApiResponse({
    status: 200,
    description: 'Question with ID # getted successfully',
  })
  @ApiResponse({ status: 404, description: 'Question with ID # not found' })
  getQuestion(@Param('id', ParseIntPipe) id: number) {
    return this.questionsService.getQuestion(id);
  }
}
